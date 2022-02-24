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
    categories: ["Addition", "Subtraction", "Multiplication"],
  },
  {
    id: 2,
    categories: ["Category 4", "Category 5", "Category 6"],
  },
  {
    id: 3,
    categories: ["Category 7", "Category 8", "Category 9"],
  },
];

export default function Home({ auth0User }) {
  const { user, error, isLoading } = useUser();
  const userInfo = useUserInfo(auth0User.username)

  // If userInfo is undefined or isLoading is true, display "Loading..."
  if (isLoading || !userInfo) return <Loading>Loading...</Loading>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <NavBar userId={userInfo.user_id} />
        <div className={styles.grid}>
          {sections.map((section, index) => {
            return (
              <CategoryContainer
                key={index}
                id={section.id}
                categories={section.categories}
                userId={userInfo.user_id}
                completedCategories={userInfo.categories}
              />
            );
          })}

          <HomeStatsDisplay userInfo={userInfo} />

          <div className={`${styles.gridItem} ${styles.gridItemLogo} `}>
            <div className={`${styles.gridItemLogoContainer}`}>
              <Image src="/logojelly.png" width="350" height="400"></Image>
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
