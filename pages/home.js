// Import Header here
import { useState } from "react";
import styles from "../styles/home.module.css";
import NavBar from "../src/components/NavBar";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";
import CategoryContainer from "../src/components/Home/CategoryContainer";
import HomeStatsDisplay from "../src/components/Home/HomeStatsDisplay";
import Loading from "../src/components/Loading";
import getAuth0User from "../src/controllers/Authorisation.js";
import useUserInfo from "../src/hooks/useUserInfo";
import CategoryScroller from "../src/components/Home/CategoryScroller";
import { motion } from "framer-motion";
import { sections } from "../src/Categories";

//Plan
//-onClick go to questions (loading page, etc.)
//-stats: we need to fetch user info.
//states for the user: {xp, beans}
//state for categories:[""]

/*Categories logic plan
 - once user id has been fetched, need to know which categories have been unlocked and which states to fetch for the loop to work (comparing the array on the page to what's in the database)
 - continue by doing a fetch request for categories that user has unlocked (categories/userid)
 - store categories unlocked in a state (as an array)
 - check which category completed by comparing list of categories
 - add state of categories checked as a prop down to container relating to section
 - when looping through category buttons, pass down a prop called 'completed' which will be true or false, depending on if found in that state 
 */

export default function Home({ auth0User }) {
  const { user, error, isLoading } = useUser();
  const userInfo = useUserInfo(auth0User.username);

  const [selectedCategory, setSelectedCategory] = useState("general");

  // If userInfo is undefined or isLoading is true, display "Loading..."
  if (isLoading || !userInfo) return <Loading redirect="/home" />;
  if (error) return <div>{error.message}</div>;

  function handleSelect(e) {
    setSelectedCategory(e.target.value);
  }

  //Find the current index
  //pass in current state to find index
  // call set the state to sections[index+1].name

  function handleNextCategory(e) {
    const index = sections.findIndex(section => {
      return section.name === selectedCategory;
    });
    const newIndex = index + 1 > sections.length - 1 ? 0 : index + 1;
    setSelectedCategory(sections[newIndex].name);
  }

  function handlePreviousCategory(e) {
    const index = sections.findIndex(section => {
      return section.name === selectedCategory;
    });
    const newIndex = index - 1 < 0 ? sections.length - 1 : index - 1;
    console.log(newIndex);
    setSelectedCategory(sections[newIndex].name);
  }

  return (
    user && (
      <div>
        <NavBar />

        <motion.main className={styles.grid} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className={styles.gridItemScroller}>
            <CategoryScroller
              handlePreviousCategory={handlePreviousCategory}
              handleNextCategory={handleNextCategory}
              selectedCategory={selectedCategory}
            />
          </div>
          <div className={styles.gridItemCategory}>
            <CategoryContainer
              id={sections[0].id}
              categories={sections.find(category => category.name === selectedCategory).categories}
              userId={userInfo.user_id}
              completedCategories={userInfo.categories}
              selectedDropdownCategory={selectedCategory}
              handleSelect={handleSelect}
            />
          </div>

          <motion.div
            className={styles.gridItemStats}
            animate={{ opacity: [0, 1], scale: [0, 1] }}
            transition={{ delay: 0.5 }}
          >
            <HomeStatsDisplay userInfo={userInfo} />
          </motion.div>
          <motion.div
            className={`${styles.gridItemLogo}`}
            animate={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ delay: 1 }}
          >
            <Image
              src={userInfo.equipped.src || "/logoJelly.png"}
              width={250}
              height={250}
              alt="avatar"
            />
          </motion.div>
        </motion.main>
      </div>
    )
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {

    // const error = await getAuth0User(ctx);
    // console.log(error.error);
    // if(error.error && error.error !== "Too Many Requests"){
    //   console.log("Found error, so redirecting to logout");
    //   return {
    //     redirect: {
    //       permanent: false,
    //       destination: "/api/auth/logout"
    //     }
    //   }
    // }

    return {
      props: {
        auth0User: await getAuth0User(ctx),
        //Add any other props here if needed for more fetching
      },
    };
  },
});
