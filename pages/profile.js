import getAuth0User from "../src/hooks/getAuth0User";
import useUserInfo from "../src/hooks/useUserInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import NavBar from "../src/components/NavBar";
import Loading from "../src/components/Loading";
import Image from "next/image";
import StatisticsItem from "../src/components/Profile/StatisticsItem";
import Badge from "../src/components/Profile/Badge";
import styles from "../styles/profile.module.css";
import BeanButton from "../src/components/BeanButton";

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

  if (isLoading) return <Loading>Loading...</Loading>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <NavBar />
        <div className={styles.profileContainer}>
          <div className={styles.userDetails}>
            <Image
              className={styles.userImage}
              src={auth0User.picture}
              alt="Jelly"
              width={110}
              height={50}
            />
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
              value={userInfo.playerLevel}
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
              value={leaderIndex}
            />
          </div>
          <h2 className={styles.title}>Achievements</h2>
          <div className={styles.badges}>
            {arrBadge.map((item, index) => {
              return (
                <BeanButton
                  key={index}
                  color={colorArray[index]}
                  text={`Level ${item + 1} `}
                />
              );
            })}
          </div>
        </div>
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
