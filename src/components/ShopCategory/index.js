import ShopItem from "../ShopItem/ShopItem";
import style from "../../../styles/shop.module.css";

export default function ShopCategory({ categorytitle, items, user, updateBeans }) {
  return (
    <div className={style.shopcategory}>
      <div className={style.categorytitle}>
        <h3>{categorytitle}</h3>
      </div>
      <div className={style.category}>
        {items.map(i => (
          <ShopItem key={i.id} user={user} item={i} updateBeans={updateBeans} />
        ))}
      </div>
    </div>
  );
}
