import ShopItem from "../ShopItem/ShopItem";
import style from "./ShopCategory.module.css";

export default function ShopCategory({
  categorytitle,
  items,
  user,
  updateBeans,
  purchases,
  equippedItem,
  setEquippedItem,
}) {
  return (
    <div className={style.container}>
      <h3 className={style.title}>{categorytitle}</h3>
      <div className={style.items}>
        {items.map((item, index) => (
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
        ))}
      </div>
    </div>
  );
}
