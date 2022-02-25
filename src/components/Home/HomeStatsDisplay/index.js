import styles from '../../../../styles/home.module.css'
import getUserLevel, {getUserRemainingXpPercentage, getUserXpNextLevelRequired, getUserXpToNextLevel, getUserXpEarnedThisLevel} from '../../../hooks/getUserLevel';


export default function HomeStatsDisplay({userInfo}){
    const levelProgress = (getUserRemainingXpPercentage(userInfo.xp, userInfo.playerLevel))

    const levelBarStyle={
        width: `${levelProgress*100}%`,
        height: "30px",
        backgroundColor: "#7EC65C",
        borderRadius: "5px"
        }
    
    return  <div className={`${styles.gridItem} ${styles.gridItemStats} `}>
    <div className={`${styles.statsContainer}`}>
    <div className={`${styles.statsDisplay}`}>
          <h2>{userInfo.username}</h2>
          <h2>Beans: {userInfo.beans}</h2>
          <p>Level {userInfo.playerLevel}</p>
          <div className={styles.levelBarStyleBackground}>
                    <div style={levelBarStyle}>
                    </div>
            </div>

          <p>{getUserXpEarnedThisLevel(userInfo.xp, userInfo.playerLevel)}/{getUserXpNextLevelRequired(userInfo.playerLevel)} XP</p>

    </div>
    
    </div>

    </div>
}


