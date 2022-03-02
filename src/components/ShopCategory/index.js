import ShopItem from "../ShopItem/ShopItem";
import style from "../../../styles/shop.module.css";

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
    <div className={style.shopcategory}>
      <div className={style.categorytitle}>
        <h3>{categorytitle}</h3>
      </div>
      <div className={style.category}>
        {items.map(item => (
          <ShopItem
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
