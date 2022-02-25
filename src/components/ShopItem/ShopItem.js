import Image from "next/image";
import Button from "react-bootstrap/Button"
import style from "../../../styles/shop.module.css"

export default function ShopItem({ src, alt, price }) {
    
  return (
    <div className={style.shopitem}>
      <Image src={src} width={50} height={80} alt={alt} />
      <div className={style.price}>
      <p className={style.tagprice}> {price}</p>
      <Image src="/beansCoins.png" width={50} height={8} alt="beans-coins" />
      </div>
      <Button>Buy</Button>
    </div>
  );
}

