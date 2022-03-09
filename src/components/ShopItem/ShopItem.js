import Button from "react-bootstrap/Button";
import style from "./ShopItem.module.css";
import { useEffect, useState } from "react";
import { getUserBeans, playSound } from "../../hooks/helpers";
import { motion } from "framer-motion";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ShopItem({
  index,
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
  }, [equippedItem, item.purchase_name]);

  function isItemPurchased(item) {
    return purchases.find(purchase => purchase.purchase_name == item.purchase_name);
  }

  async function addPurchase(purchase_name, src) {
    const body = {
      purchase_name,
      src,
      user_id: user.user_id,
    };

    await fetch(`${API_URL}/purchases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async function equipItem(purchase_name) {
    const body = { purchase_name };

    await fetch(`${API_URL}/purchases/${user.user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async function handlePurchase() {
    // Check if user has enough beans
    const currentBeans = await getUserBeans(user.username);
    if (currentBeans - item.price < 0) return console.log("Not enough beans.");
    // If they do, remove beans from user in db
    addPurchase(item.purchase_name, item.src);
    updateBeans(price);
    setPurchased(true);
    playSound("purchase");
  }

  function handleEquip() {
    setEquippedItem(item);
    equipItem(item.purchase_name);
    playSound("pop");
  }

  return (
    <motion.div
      className={style.container}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ delay: 0.25 * index }}
    >
      <div className={style.image}>
        <Image data-cy="shopItemImg" src={src} alt={alt} width={100} height={100} />
      </div>

      <div className={style.beanCostContainer}>
        <p> {price}</p>
        <div className={style.beanCostImage}>
          <Image src="/beanCurrency.png" alt="beans-coins" width={40} height={25} />
        </div>
      </div>

      <div className={style.buttons}>
        {!purchased && <Button className={style.buyBtn} onClick={handlePurchase}>Buy</Button>}
        {purchased && !isEquipped && (
          <Button className={style.equipBtn} onClick={handleEquip}>
            Equip
          </Button>
        )}
        {purchased && isEquipped && <p className={style.equipped}>Equipped</p>}
      </div>
      <audio id="pop" src="/audio/pop.wav" />
      <audio id="purchase" src="/audio/purchase.wav" />
    </motion.div>
  );
}
