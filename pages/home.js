// Import Header here
import { useState, useEffect } from "react";
import styles from "../styles/home.module.css";
import NavBar from "../src/components/NavBar";
import { useUser, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";
import CategoryContainer from "../src/components/Home/CategoryContainer";
import HomeStatsDisplay from "../src/components/Home/HomeStatsDisplay";
import Loading from "../src/components/Loading";
import getAuth0User from "../src/hooks/getAuth0User";
import useUserInfo from "../src/hooks/useUserInfo";

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

const sections = [
  {
    id: 1,
    name: "social",
    categories: ["Drinking", "Eating Out", "Travel", "Occasions", "Holidays"],
  },
  {
    id: 2,
    name: "financial",
    categories: ["Interest Rates", "Currency", "Mortgages", "Charity", "Savings"],
  },
  {
    id: 3,
    name: "wellbeing",
    categories: ["Health", "Exercise", "Nutrition", "Mindfulness", "Weight"],
  },
  {
    id:4,
    name: "general",
    categories: ["Further", "Division", "Addition", "Subtraction", "Multiplication"]
  },
  {
    id:5,
    name: "home",
    categories: ["Gardening", "Shopping", "Cooking", "Chores", "DIY"]
  }
];

export default function Home({ auth0User }) {
  const { user, error, isLoading } = useUser();
  const userInfo = useUserInfo(auth0User.username)
  

  const [selectedCategory, setSelectedCategory] = useState("social")

  // If userInfo is undefined or isLoading is true, display "Loading..."
  if (isLoading || !userInfo) 
  {
    
    return <Loading>Loading...</Loading>;
  }
  if (error) return <div>{error.message}</div>;


  function handleSelect(e){
    setSelectedCategory(e.target.value)
  }

  return (
    user && (
      <div>
        <NavBar userId={userInfo.user_id} />
        <div className={styles.grid}>
      
              <CategoryContainer
                id={sections[0].id}
                categories={sections.find(category => category.name === selectedCategory).categories}
                userId={userInfo.user_id}
                completedCategories={userInfo.categories}
                selectedDropdownCategory={selectedCategory}
                handleSelect={handleSelect}
              />


          <HomeStatsDisplay userInfo={userInfo} />

          <div className={`${styles.gridItem} ${styles.gridItemLogo} `}>
            <div className={`${styles.gridItemLogoContainer}`}>
              <Image src="/logojelly.png" width="250" height="250"></Image>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return {
      props:{
        auth0User: await getAuth0User(ctx)
        //Add any other props here if needed for more fetching
    }}
  },
});
