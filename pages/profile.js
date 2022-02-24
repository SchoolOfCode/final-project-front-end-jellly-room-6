import getAuth0User from "../src/hooks/getAuth0User";
import useUserInfo from "../src/hooks/useUserInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import NavBar from "../src/components/NavBar";
import Loading from "../src/components/Loading";
import Image from "next/image";
import StatisticsItem from "../src/components/Profile/StatisticsItem";
import Badge from "../src/components/Profile/Badge";
import styles from "../styles/profile.module.css";

export default function Profile({ auth0User }) {

  const { user, error, isLoading } = useUser();
  const userInfo = useUserInfo(auth0User.username)

  if (isLoading) return <Loading>Loading...</Loading>;
  if (error) return <div>{error.message}</div>;

  

  return (
    user && (
      <div>
        <NavBar />
        <div className={styles.profileContainer}>
          <div className={styles.userDetails}>
            <Image className={styles.userImage} src={auth0User.picture} alt="Jelly" width={110} height={50} />
              <div>
                <h2>{userInfo.username}</h2>
                <h3>{auth0User.email}</h3>
              </div>
          </div>

            <hr className={styles.line} />


          <h2 className={styles.title}>Statistics</h2>
          <div className={styles.statistics}>
            <StatisticsItem
              className={styles.StatisticsItem}
              title="Player Level"
              value="1"
            />
            <StatisticsItem
              className={styles.StatisticsItem}
              title="Total XP"
              value={userInfo.xp}
            />
            <StatisticsItem
              className={styles.StatisticsItem}
              title="Total Beans"
              value={userInfo.beans}
            />
            <StatisticsItem
              className={styles.StatisticsItem}
              title="Leaderboard Position"
              value="1"
            />
          </div>
          <h2 className={styles.title}>Achievements</h2>
          <div className={styles.badges}>
            <Badge className={styles.badgeItem} name="Level 1" />
            <Badge className={styles.badgeItem} name="Level 2" />
            <Badge className={styles.badgeItem} name="Level 3" />
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
