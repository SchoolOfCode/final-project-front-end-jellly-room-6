import styles from '../../../../styles/home.module.css'


export default function HomeStatsDisplay({userInfo}){
    
    return  <div className={`${styles.gridItem} ${styles.gridItemStats} `}>
    <div className={`${styles.statsContainer}`}>
    <div className={`${styles.statsDisplay}`}>
          <h2>{userInfo.username}</h2>
          <h2>Beans: {userInfo.beans}</h2>
          <p>Level 1</p>
          <p>LEVEL PROGRESS BAR</p>
          <p>{userInfo.xp} XP</p>

    </div>
    
    </div>

    </div>
}