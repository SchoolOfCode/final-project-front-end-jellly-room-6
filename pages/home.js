// Import Header here
import { useState, useEffect, useLayoutEffect } from "react";
import styles from "../styles/home.module.css";
import Link from 'next/link';
import CategoryButton from "../src/components/CategoryButton";
//Plan
//-onClick go to questions (loading page, etc.)
//-stats: we need to fetch user info.
//states for the user: {xp, beans}
//state for categories:[""]



export default function Home () {

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

    function handleClick(){
      console.log("test")
    }

 console.log(userInfo);
    return (
      <div>
        {/* Header goes here */}
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


                  <CategoryButton handleClick={handleClick} category="Addition"/>
                  <CategoryButton handleClick={handleClick} category="Subtraction"/>
                  <CategoryButton handleClick={handleClick} category="Multiplication"/>

                  
                  
                  
                  
                </div>
            </div>

          </div>

              
        </div>


      </div>
        
    );
  }


  

