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
        Profile
      </div>
    )
  );
}
