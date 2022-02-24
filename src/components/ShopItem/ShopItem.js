import Image from "next/image";
import Button from "react-bootstrap/Button"
import style from "../../../styles/shop.module.css"

export default function ShopItem({ src, alt, price }) {
    
  return (
    <>
      <Image src={src} width={50} height={45} alt={alt} />
      <div className={style.price}>
      <p>Price: {price}</p>
      <Image src="/beansCoins.png" width={10} height={10} alt="beans-coins" />
      </div>
      <Button>Buy</Button>
    </>
  );
}

