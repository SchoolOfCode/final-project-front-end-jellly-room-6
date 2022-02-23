// Import Header here
import { useState, useEffect, useLayoutEffect } from "react";
import styles from "../styles/home.module.css";
import NavBar from "../src/components/NavBar"
import { useUser, getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Image from 'next/image'
import CategoryContainer from "../src/components/Home/CategoryContainer";
import HomeStatsDisplay from "../src/components/Home/HomeStatsDisplay";
//Plan
//-onClick go to questions (loading page, etc.)
//-stats: we need to fetch user info.
//states for the user: {xp, beans}
//state for categories:[""]

const sections = [{
  id: 1,
  categories: ["Addition", "Subtraction", "Multiplication"]
},
{
  id: 2,
  categories: ["Category 4", "Category 5", "Category 6"]
},
{
  id:3,
  categories: ["Category 7", "Category 8", "Category 9"]
}]

export default function Home ({authenticatedUser}) {

  const { user, error, isLoading } = useUser();
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    async function createNewUser(username) {
      const res = await fetch(`https://jellly.herokuapp.com/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username }),
      });
      const data = await res.json();
      if (!data.payload || data.payload.length === 0) return;
      // console.log("Created user:", data.payload);
      await fetchUser();
    }

    async function fetchUser() {
      if (!authenticatedUser) return;
      // console.log("Retrieving user " + authenticatedUser);
      const res = await fetch(`https://jellly.herokuapp.com/users/${authenticatedUser}`);
      const data = await res.json();
      if (!data.payload || data.payload.length === 0) {
        // console.log("User not found.. creating user: " + authenticatedUser);
        createNewUser(authenticatedUser);
        return;
      }
      // console.log("Found user:", data.payload);
      setUserInfo(data.payload[0]);
    }

    fetchUser();
  }, [authenticatedUser]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    window.location.href = "/";
  }
  return (
    user && (
      <div>
        <NavBar />
        <div className={styles.grid}>

        {sections.map((section, index)=>{
          return <CategoryContainer key={index} id={section.id} categories={section.categories} userId={userInfo.user_id}/>
        })}

          <HomeStatsDisplay userInfo={userInfo}/>


  {/* TODO: Convert img to next <Image/> component */}

          <div className={`${styles.gridItem} ${styles.gridItemLogo} `}>
            <div className={`${styles.gridItemLogoContainer}`}>
                <img src="https://via.placeholder.com/350x400"></img>
            </div>
          </div>


        </div>



      </div>
    )
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);

    const getUsername = async () => {
      const domain = "jelllyapp.eu.auth0.com";

      try {
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${session.user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });

        const data = await metadataResponse.json();
        return data.username;
      } catch (e) {
        console.log(e.message);
      }
    };
    const username = await getUsername();
    return { props: { authenticatedUser: username || "No user" } };
  },
});
