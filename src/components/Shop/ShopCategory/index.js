import style from "./ShopCategory.module.css";
import ShopItem from "../ShopItem";

export default function ShopCategory({
  categoryTitle,
  items,
  user,
  updateBeans,
  purchases,
  equippedItem,
  setEquippedItem,
}) {
  return (
    <div className={style.container}>
      <h3 className={style.title}>{categoryTitle}</h3>
      <div className={style.items}>
      {items.map((item) => {
  return <ShopItem
    index={item.id}
    setEquippedItem={setEquippedItem}
    equippedItem={equippedItem}
    isEquipped={equippedItem.purchase_name === item.purchase_name}
    key={item.id}
    user={user}
    item={item}
    updateBeans={updateBeans}
    purchases={purchases}
  />
})}
      </div>
    </div>
  );
}
