import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "../src/components/NavBar";
import Loading from "../src/components/Loading";
import Image from "next/image";
import StatisticsItem from "../src/components/Profile/StatisticsItem";
import Badge from "../src/components/Profile/Badge";
import styles from "../styles/profile.module.css"


export default function Profile({userID}) {
  console.log(userID)
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Loading>Loading...</Loading>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    window.location.href = "/";
  }

  


  return (
    user && (
      <div>
        <NavBar />
        <div>
          <div> 

            <Image src="/logoJelly.png" width={50} height={50} />
            <h2>Bob Smith</h2>
            <h3>Bobbles123</h3>

          </div>

          <div>
            <h2>Statistics</h2>
            <StatisticsItem title="Player Level" value="2" />
            <StatisticsItem title="Total XP" value="145" />
            <StatisticsItem title="Total Beans" value="20" />
            <StatisticsItem title="Leaderboard Position" value="1" />
          </div>
          <div>
            <h2>Achievements</h2>
              <Badge name="Level 1"/>
              <Badge name="Level 2"/>
              <Badge name="Level 3"/>
            

          </div>
        </div>
      </div>
    )
  );
}

// Context gives us access to queries in the URL I.E. /questions?category=Addition
export async function getServerSideProps(context) {

  return {
    props: {
      userID: context.query.userId
    },
  };
}