import Image from "next/image";
import Button from "react-bootstrap/Button";
import style from "../../../styles/shop.module.css";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ShopItem({
  item,
  equippedItem,
  setEquippedItem,
  user,
  purchases,
  updateBeans,
}) {
  const { src, alt, price } = item;
  const [purchased, setPurchased] = useState(isItemPurchased(item));
  const [isEquipped, setIsEquipped] = useState(false);

  useEffect(() => {
    if (equippedItem.purchase_name === item.purchase_name) setIsEquipped(true);
    else setIsEquipped(false);
  }, [equippedItem]);

  function isItemPurchased(item) {
    return purchases.find(purchase => purchase.purchase_name == item.purchase_name);
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

  async function equipItem(purchase_name) {
    const body = { purchase_name };

    const res = await fetch(`${API_URL}/purchases/${user.user_id}`, {
      method: "PUT",
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
    if (user.beans < item.price) return console.log("Not enough beans.");
    // If they do, remove beans from user in db
    addPurchase(item.purchase_name);
    updateBeans(price);
    setPurchased(true);
  }

  function handleEquip() {
    setEquippedItem(item);
    equipItem(item.purchase_name);
  }

  return (
    <div className={style.shopitem}>
      <Image src={src} width={50} height={100} alt={alt} />
      <div className={style.price}>
        <p className={style.tagprice}> {price}</p>
        <Image src="/beansCoins.png" width={50} height={2} alt="beans-coins" />
      </div>
      {!purchased && <Button onClick={handlePurchase}>Buy</Button>}
      {purchased && !isEquipped && (
        <Button className={style.equipBtn} onClick={handleEquip}>
          Equip
        </Button>
      )}
      {purchased && isEquipped && <p>Equipped</p>}
    </div>
  );
}
