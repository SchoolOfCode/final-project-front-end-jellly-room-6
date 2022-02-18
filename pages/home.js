// Import Header here
import { useState, useEffect, useLayoutEffect } from "react";
import styles from "../styles/home.module.css";
import NavBar from "../src/components/NavBar"
import CategoryButton from "../src/components/CategoryButton";
import { useUser, getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
//Plan
//-onClick go to questions (loading page, etc.)
//-stats: we need to fetch user info.
//states for the user: {xp, beans}
//state for categories:[""]



export default function Home ({authenticatedUser}) {

  const { user, error, isLoading } = useUser();
  


  const [username, setUsername] = useState(authenticatedUser);

  const [userInfo, setUserInfo] = useState("");

  const [categories,setCategories] = useState([]);


  useEffect(() => {
    
    async function createNewUser(username){
      const res = await fetch (`https://jellly.herokuapp.com/users/${username}`);
      const data = await res.json();
      if(!data.payload || data.payload.length === 0) return;
      console.log("Created user:", data.payload);
      setUserInfo(data.payload[0]);
    }
    
    async function fetchUser(){
      if(!authenticatedUser) return;
      console.log("Retrieving user " + authenticatedUser)
      const res = await fetch(`https://jellly.herokuapp.com/user/${authenticatedUser}`);
      const data = await res.json();
      if(!data.payload || data.payload.length === 0) {
        console.log("User not found.. creating user: " + authenticatedUser)
        createNewUser(authenticatedUser);
        return;
      }
      console.log("Found user:", data.payload)
      setUserInfo(data.payload[0])
    }

    fetchUser();


  }, [authenticatedUser])
  
    

 

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user){
    window.location.href = "/"
  }
    return (
      user && (
    
      <div>
      
        <NavBar/>
        <div className={styles.grid}>

        <div className={`${styles.gridItem} ${styles.statsDisplay}`}>
                <h2>{userInfo.username}</h2>
                <h2>Beans: {username}</h2>
                <p>Level 1</p>
                <p>{userInfo.xp} XP</p>
          </div>

          <div className={`${styles.gridItem} ${styles.gridItemLevel}`}>



            <div className={styles.level}>
                <div className={styles.levelContainer}>


                  <CategoryButton category="Addition"/>
                  <CategoryButton category="Subtraction"/>
                  <CategoryButton category="Multiplication"/>

                  
                  
                  
                  
                </div>
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
              Authorization: `Bearer ${session.accessToken}`
             },
          });
    
          const data = await metadataResponse.json();
          return data.username

        } catch (e) {
          console.log(e.message);
        }
  
      };
      const username = await getUsername();
      return { props: 
        { authenticatedUser: username} 
      };
     }
    });
  

