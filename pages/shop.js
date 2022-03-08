import { useEffect, useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import getAuth0User from "../src/hooks/getAuth0User";
import useUserInfo from "../src/hooks/useUserInfo";
import items from "../src/data";
import NavBar from "../src/components/NavBar";
import ShopCategory from "../src/components/ShopCategory";
import Loading from "../src/components/Loading";
import InformationCard from "../src/components/InformationCard";
import Image from "next/image";
import { motion } from "framer-motion";

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

  if (isLoading || !userInfo) return <Loading redirect="/shop" />;
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

  console.log(items);

  return (
    userInfo && (
      <>
        <NavBar />
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.h1 className={style.title} animate={{ y: [20, 0], opacity: [0, 1] }}>
            The Jellly Shop
          </motion.h1>
          <motion.div className={style.container} animate={{ opacity: [0, 1] }}>
            <div>
              {items.map(category => (
                <>
                  <ShopCategory
                    equippedItem={equippedItem}
                    setEquippedItem={setEquippedItem}
                    user={userInfo}
                    categorytitle={category[0].category}
                    items={category}
                    updateBeans={updateBeans}
                    purchases={userInfo.purchases}
                  />
                </>
              ))}
            </div>
            <motion.div
              className={style.panel}
              animate={{ x: [20, 0], opacity: [0, 1] }}
              transition={{ delay: 1 }}
            >
              <InformationCard username={userInfo.username} beans={beans} />
              <motion.div
                className={style.avatar}
                animate={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ delay: 1.25 }}
              >
                <Image src={equippedItem.src || "/logoJelly.png"} alt="" width={200} height={200} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.main>
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
