import getAuth0User from "../src/hooks/getAuth0User";
import useUserInfo from "../src/hooks/useUserInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import NavBar from "../src/components/NavBar";
import Loading from "../src/components/Loading";
import Image from "next/image";
import StatisticsItem from "../src/components/Profile/StatisticsItem";
import styles from "../styles/profile.module.css";
import BeanButton from "../src/components/BeanButton";
import { motion } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Profile({ auth0User, users }) {
  const { user, error, isLoading } = useUser();
  const userInfo = useUserInfo(auth0User.username);
  const colorArray = [150, 15, 300, 70, 250, 270];
  let leaderIndex = users
    .map((user, index) => {
      if (user.username === auth0User.username) {
        return index + 1;
      }
    })
    .join("");

  let arrBadge = [];
  for (let i = 0; i < userInfo.playerLevel; i++) {
    arrBadge.push(i);
  }

  if (isLoading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <NavBar />
        <motion.div className={styles.profileContainer} animate={{ opacity: [0, 1] }}>
          <motion.div className={styles.userDetails} animate={{ x: [-100, 0], opacity: [0, 1] }}>
            <Image
              className={styles.userImage}
              src={auth0User.picture}
              alt="Jelly"
              width={200}
              height={40}
            />
            <div className={styles.userTitle}>
              <h2 className={styles.username}>{userInfo.username}</h2>
              <h3 className={styles.email}>{auth0User.email}</h3>
            </div>
          </motion.div>

          <hr className={styles.line} />

          <motion.h2
            className={styles.title}
            animate={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ delay: 0.5 }}
          >
            Statistics
          </motion.h2>
          <motion.div
            className={styles.statistics}
            animate={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ delay: 0.5 }}
          >
            <StatisticsItem
              className={styles.statisticsItem}
              title="Player Level"
              value={userInfo.playerLevel}
            />
            <StatisticsItem
              className={styles.statisticsItem}
              title="Total XP"
              value={userInfo.xp}
            />
            <StatisticsItem
              className={styles.statisticsItem}
              title="Total Beans"
              value={userInfo.beans}
            />
            <StatisticsItem
              className={styles.statisticsItem}
              title="Leaderboard Position"
              value={leaderIndex}
            />
          </motion.div>
          <motion.h2
            className={styles.title}
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 1 }}
          >
            Achievements
          </motion.h2>
          <motion.div
            className={styles.badges}
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 1 }}
          >
            {arrBadge.map((item, index) => {
              return (
                <BeanButton key={index} color={colorArray[index]} text={`Level ${item + 1} `} />
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    )
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();

    const users = data.payload.sort((a, b) => (a.xp < b.xp ? 1 : -1));

    return {
      props: {
        auth0User: await getAuth0User(ctx),
        users,
        //Add any other props here if needed for more fetching
      },
    };
  },
});
