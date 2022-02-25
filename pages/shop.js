import NavBar from "../src/components/NavBar";
import ShopCategory from "../src/components/ShopCategory";
import getAuth0User from "../src/hooks/getAuth0User";
import useUserInfo from "../src/hooks/useUserInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import InformationCard from "../src/components/InformationCard";
import style from "../styles/shop.module.css";

const data = [
  { id: 1, src: "/logoJelly.png", alt: "beans-coins", price: 150 },
  { id: 1, src: "/jelly_guy_blue.png", alt: "beans-coins", price: 150 },
  { id: 1, src: "/jelly_guy_green.png", alt: "beans-coins", price: 150 },
  { id: 1, src: "/jelly_guy_red.png", alt: "beans-coins", price: 150 },
];

export default function Shop({ auth0User }) {
  const { user, error, isLoading } = useUser();
  const userInfo = useUserInfo(auth0User.username);
  console.log(userInfo);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  // if (!user) {
  //   window.location.href = "/";
  // }

  return (
    user && (
      <>
        <NavBar />
        <div className={style.shoppagetitle}>
          <h1>The Jellly Shop</h1>
        </div>

        <InformationCard username={userInfo.username} beans={userInfo.beans} />
        <ShopCategory categorytitle="Color skins" data={data} />
        <ShopCategory categorytitle="Color skins 2" data={data} />
        <ShopCategory categorytitle="Color skins 3" data={data} />
      </>
    )
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    return {
      props: {
        auth0User: await getAuth0User(ctx),
        //Add any other props here if needed for more fetching
      },
    };
  },
});
