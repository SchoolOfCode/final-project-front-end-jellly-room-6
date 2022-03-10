import style from "./ShopCategory.module.css";
import ShopItem from "../ShopItem";
import { motion } from "framer-motion";

export default function ShopCategory({
  categoryTitle,
  items,
  user,
  updateBeans,
  purchases,
  equippedItem,
  setEquippedItem,
  index,
}) {
  return (
    <motion.div
      className={style.container}
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index }}
    >
      <h3 className={style.title}>{categoryTitle}</h3>
      <div className={style.items}>
        {items.map((item, index) => {
          return (
            <ShopItem
              index={index}
              setEquippedItem={setEquippedItem}
              equippedItem={equippedItem}
              isEquipped={equippedItem.purchase_name === item.purchase_name}
              key={item.id}
              user={user}
              item={item}
              updateBeans={updateBeans}
              purchases={purchases}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
