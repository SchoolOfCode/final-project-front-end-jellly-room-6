// Import Header here
import { useState, useEffect, useLayoutEffect } from "react";
import styles from "../styles/home.module.css";
//Plan
//-onClick go to questions (loading page, etc.)
//-stats: we need to fetch user info.
//states for the user: {xp, beans}
//state for categories:[""]
//

export default function Home () {
  const [userInfo, setUserInfo]=useState({});
  const [categories,setCategories]=useState([""]);

   useEffect( ()=>{ 
     async function getUser(){
    const res = await fetch("/users/userName")
   const data= await res.json();
   setUserInfo(data)} getUser()},[]
   )

 console.log(userInfo);
    return (
      <div>
        {/* Header goes here */}
        <div className={styles.grid}>

          <div className={`${styles.gridItem} ${styles.gridItemLevel}`}>

            <div className={styles.level}>
                <div className={styles.levelContainer}>
                  <div className={styles.beanBtn}>Addition</div>
                  <div className={styles.beanBtn}>Subtraction</div>
                  <div className={styles.beanBtn}>Multiplication</div>
                </div>
            </div>

          </div>

          <div className={`${styles.gridItem} ${styles.gridItemLevel}`}>

            <div className={styles.level}>
                <div className={styles.levelContainer}>
                  <div className={styles.beanBtn}>Addition</div>
                  <div className={styles.beanBtn}>Subtraction</div>
                  <div className={styles.beanBtn}>Multiplication</div>
                </div>
            </div>

          </div>

          <div className={`${styles.gridItem} ${styles.gridItemLevel}`}>

          <div className={styles.level}>
              <div className={styles.levelContainer}>
                <div className={styles.beanBtn}>Addition</div>
                <div className={styles.beanBtn}>Subtraction</div>
                <div className={styles.beanBtn}>Multiplication</div>
              </div>
          </div>

          </div>

          <div className={`${styles.statsDisplay} ${styles.gridItemStats}`}>
                <h2>Bob Smith</h2>
                <h2>100</h2>
                <p>Level 1</p>
                <p>20/150 XP</p>
          </div>

              
        </div>


      </div>
        
    );
  }
  

            {/* <div className={styles.level}>
                  <h3 className={styles.levelTitle}>Level 1</h3>
                  <div className={styles.levelContainer}>
                    <div className={styles.beanBtn}>Addition</div>
                    <div className={styles.beanBtn}>Subtraction</div>
                    <div className={styles.beanBtn}>Multiplication</div>
                  </div>
          </div>
          
          <div className={styles.level}>
              <h3 className={styles.levelTitle}>Level 2</h3>
              <div className={styles.levelContainer}>
                <div className={styles.beanBtn}>Addition</div>
                <div className={styles.beanBtn}>Subtraction</div>
                <div className={styles.beanBtn}>Multiplication</div>
              </div>
          </div>

          <div className={styles.level}>
              <h3 className={styles.levelTitle}>Level 3</h3>
              <div className={styles.levelContainer}>
                <div className={styles.beanBtn}>Addition</div>
                <div className={styles.beanBtn}>Subtraction</div>
                <div className={styles.beanBtn}>Multiplication</div>
              </div>
          </div>


          <div className={styles.statsDisplay}>
                <h2>Bob Smith</h2>
                <h2>100</h2>
                <p>Level 1</p>
                <p>20/150 XP</p>
          </div> */}