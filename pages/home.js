// Import Header here
import styles from "../styles/home.module.css";

export default function Home () {
    return (
      <div>
        {/* Header goes here */}
        <div className={styles.levelsWrapper}>


            <div className={styles.level}>
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
              </div>
        </div>


      </div>
        
    );
  }
  