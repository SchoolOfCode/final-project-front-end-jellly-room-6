import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "../src/components/NavBar";
import Loading from "../src/components/Loading";

export default function Profile() {
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
          <div> Profile information</div>
          <div>
            <h2>Statistics</h2>
            <div className="statistics-item">
              <h3>Player Level</h3>
              <div>2</div>
            </div>
            <div className="statistics-item">
              <h3>Total XP</h3>
              <div>100</div>
            </div>
            <div className="statistics-item">
              <h3>Total Beans</h3>
              <div>20</div>
            </div>
            <div className="statistics-item">
              <h3>Leaderboard Position</h3>
              <div>1</div>
            </div>
          </div>
          <div>Achievements </div>
        </div>
      </div>
    )
  );
}
