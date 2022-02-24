import NavBar from "../src/components/NavBar";
import ShopCategory from "../src/components/ShopCategory";
import getAuth0User from "../src/hooks/getAuth0User";
import useUserInfo from "../src/hooks/useUserInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import InformationCard from "../src/components/InformationCard";

const data = [{id: 1, src:"/logoJelly.png", alt:"beans-coins", price:150}, {id: 1, src:"/jelly_guy_blue.png", alt:"beans-coins", price:150}, {id: 1, src:"/jelly_guy_green.png", alt:"beans-coins", price:150}, {id: 1, src:"/jelly_guy_red.png", alt:"beans-coins", price:150}]

export default function Shop({username}) {
  const { user, error, isLoading } = useUser();
  const userInfo = useUserInfo(username)
  console.log(userInfo)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  // if (!user) {
  //   window.location.href = "/";
  // }


  return (
    user && (
      <>

      <NavBar/>
      <h1>The Jelly Shop</h1>
      <ShopCategory categorytitle="Color skins" data={data} /> 
      <InformationCard username={username} beans={userInfo.beans}/>
      </>
      
    )
  );
}

  export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return {
      props:{
        username: await getAuth0User(ctx)
        //Add any other props here if needed for more fetching
    }}
  },
});
