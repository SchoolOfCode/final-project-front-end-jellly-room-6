import styles from './index.module.css'
import {getUserRemainingXpPercentage, getUserXpNextLevelRequired, getUserXpEarnedThisLevel} from '../../../controllers/User';
import Image from 'next/image';

export default function HomeStatsDisplay({userInfo}){
    const levelProgress = (getUserRemainingXpPercentage(userInfo.xp, userInfo.playerLevel))

    const levelBarStyle={
        width: `${levelProgress*100}%`,
        height: "30px",
        backgroundColor: "#7EC65C",
        borderRadius: "5px"
        }
    
    return  <div className={`${styles.statsDisplay}`}>
    <div className={styles.statsTitle}>

              <div className={`${styles.gridItemLogoMobile}`}>
          <Image data-cy="jellyavatar"
                src={userInfo.equipped.src || "/logoJelly.png"}
                width={200}
                height={200}
                alt="avatar"
              />
           </div>
          <h1>{userInfo.username}</h1>

    </div>
          <div  className={styles.beans}>
            <Image data-cy="jarofbeans" src="/Jarbean.png" width={125} height={150} alt="Jar of beans" />
                <div className={styles.beanAmount}>

                    <p>{userInfo.beans}</p>
                </div>
          </div>
          <p>Level {userInfo.playerLevel}</p>
          
          <div className={styles.levelBarContainer}>

          <div className={styles.levelBarStyleBackground}>
                    <div style={levelBarStyle}>
                    </div>
            </div>
            <div className={styles.levelBarNextLevel}><p>{userInfo.playerLevel + 1}</p></div>

          </div>

          <p>{getUserXpEarnedThisLevel(userInfo.xp, userInfo.playerLevel)}/{getUserXpNextLevelRequired(userInfo.playerLevel)} XP</p>
    
    </div>

}


