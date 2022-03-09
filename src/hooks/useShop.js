import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function useShop(userInfo) {


    const [beans, setBeans] = useState("");
    const [equippedItem, setEquippedItem] = useState("");
    
    useEffect(() => {
      setBeans(userInfo.beans);
      if (userInfo) setEquippedItem(userInfo.equipped);
    }, [userInfo]);
    

    
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


    return {currentBeans: beans, updateBeans, equippedItem, setEquippedItem}
}
