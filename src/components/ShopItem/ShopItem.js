import Image from "next/image";
import Button from "react-bootstrap/Button";
import style from "../../../styles/shop.module.css";
import useUserInfo from "../../hooks/useUserInfo";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ShopItem({ item, user, updateBeans }) {
  const { purchase_name, src, alt, price } = item;
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    checkPurchases();
  });
  console.log("found: " + user);

  function checkPurchases() {
    const foundPurchase = user.purchases.filter(
      (el) => el.purchase_name === item.purchase_name
    );
    if (foundPurchase) {
      setDisabled(true);
    }
  }
  async function addPurchase(purchase_name) {
    const body = {
      purchase_name,
      user_id: user.user_id,
    };

    const res = await fetch(`${API_URL}/purchases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    console.log(data);
  }

  function handlePurchase() {
    // Check if user has enough beans
    if (user.beans < item.price) return;
    // If they do, remove beans from user in db
    updateBeans(price);
    addPurchase(item.purchase_name);

    //
  }

  return (
    <div className={style.shopitem}>
      <Image src={src} width={50} height={100} alt={alt} />
      <div className={style.price}>
        <p className={style.tagprice}> {price}</p>
        <Image src="/beansCoins.png" width={50} height={2} alt="beans-coins" />
      </div>
      <Button disabled={disabled} onClick={handlePurchase}>
        Buy
      </Button>
    </div>
  );
}
