import Button from "react-bootstrap/Button";
import style from "./ShopItem.module.css";
import { useEffect, useState } from "react";
import { getUserBeans } from "../../hooks/helpers";
import Image from "next/image";

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

    console.log("Purchased:", data.payload.purchase_name);
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

    console.log("Equipped:", data.payload.purchase_name);
  }

  async function handlePurchase() {
    // Check if user has enough beans
    const currentBeans = await getUserBeans(user.username);
    if (currentBeans - item.price < 0) return console.log("Not enough beans.");
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
    <div className={style.container}>
      <div className={style.image}>
        <Image src={src} alt={alt} width={100} height={100} />
      </div>

      <div className={style.beanCostContainer}>
        <p> {price}</p>
        <div className={style.beanCostImage}>
          <Image src="/beansCoins.png" alt="beans-coins"   width={40} height={25}/>
        </div>
      </div>

      <div className={style.buttons}>
        {!purchased && <Button onClick={handlePurchase}>Buy</Button>}
        {purchased && !isEquipped && (
          <Button className={style.equipBtn} onClick={handleEquip}>
            Equip
          </Button>
        )}
        {purchased && isEquipped && <p className={style.equipped}>Equipped</p>}
      </div>
    </div>
  );
}
