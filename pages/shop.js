import NavBar from "../src/components/NavBar";
import ShopCategory from "../src/components/ShopCategory";
import Loading from "../src/components/Loading";
import getAuth0User from "../src/hooks/getAuth0User";
import useUserInfo from "../src/hooks/useUserInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import InformationCard from "../src/components/InformationCard";
import style from "../styles/shop.module.css";
import { useEffect, useState } from "react";
import { items } from "../src/data";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Shop({ auth0User }) {
  const { user, error, isLoading } = useUser();
  const userInfo = useUserInfo(auth0User.username);
  const [beans, setBeans] = useState("");

  console.log(userInfo);

  useEffect(() => {
    setBeans(userInfo.beans);
  }, [userInfo]);

  if (isLoading || !userInfo) return <Loading />;
  if (error) return <div>{error.message}</div>;

  async function updateBeans(price) {
    // Update beans in database
    const body = { XP: 0, beans: -price };
    await fetch(`${API_URL}/users/${userInfo.user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    // Update beans state for front end display
    setBeans(beans - price);
  }

  return (
    user && (
      <>
        <NavBar />
        <div className={style.shoppagetitle}>
          <h1>The Jellly Shop</h1>
        </div>

        <InformationCard username={userInfo.username} beans={beans} />
        <ShopCategory
          user={userInfo}
          categorytitle="Color skins"
          items={items}
          updateBeans={updateBeans}
          purchases={userInfo.purchases}
        />
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
