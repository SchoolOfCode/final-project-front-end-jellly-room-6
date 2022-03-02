import { useEffect, useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import getAuth0User from "../src/hooks/getAuth0User";
import useUserInfo from "../src/hooks/useUserInfo";
import { getEquippedItemImg } from "../src/hooks/helpers";
import { items } from "../src/data";
import NavBar from "../src/components/NavBar";
import ShopCategory from "../src/components/ShopCategory";
import Loading from "../src/components/Loading";
import InformationCard from "../src/components/InformationCard";
import Image from "next/image";

import style from "../styles/shop.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Shop({ auth0User }) {
  const { user, error, isLoading } = useUser();
  const userInfo = useUserInfo(auth0User.username);
  const [beans, setBeans] = useState("");
  const [equippedItem, setEquippedItem] = useState("");

  useEffect(() => {
    setBeans(userInfo.beans);
    if (userInfo) setEquippedItem(userInfo.equipped);
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
          equippedItem={equippedItem}
          setEquippedItem={setEquippedItem}
          user={userInfo}
          categorytitle="Color skins"
          items={items}
          updateBeans={updateBeans}
          purchases={userInfo.purchases}
        />
        <Image
          src={getEquippedItemImg(equippedItem) || "/logoJelly.png"}
          alt=""
          width={200}
          height={200}
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
