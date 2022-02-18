// Import Header here
import { useState, useEffect, useLayoutEffect } from "react";
import styles from "../styles/home.module.css";
import NavBar from "../src/components/NavBar"
import CategoryButton from "../src/components/CategoryButton";
import { useUser } from '@auth0/nextjs-auth0';
//Plan
//-onClick go to questions (loading page, etc.)
//-stats: we need to fetch user info.
//states for the user: {xp, beans}
//state for categories:[""]



export default function Home () {

  const { user, error, isLoading } = useUser();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user){
    window.location.href = "/"
  }

  const [username, setUsername] = useState("JellyLord");

  const [userInfo, setUserInfo] = useState({});

  const [categories,setCategories] = useState([]);

   useEffect( ()=>{ 

      async function getUser(){
        const res = await fetch(`https://jellly.herokuapp.com/users/${username}`)
        const data = await res.json();
        setUserInfo(data.payload[0])
        } 
      getUser()

    },[])

    

 


    return (
      user && (
    
      <div>
      
        <NavBar/>
        <div className={styles.grid}>

        <div className={`${styles.gridItem} ${styles.statsDisplay}`}>
                <h2>{userInfo.username}</h2>
                <h2>Beans: {userInfo.beans}</h2>
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


  

