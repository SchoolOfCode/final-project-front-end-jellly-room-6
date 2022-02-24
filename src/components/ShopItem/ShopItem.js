import Image from "next/image";
import Button from "react-bootstrap/Button"

export default function ShopItem({ src, alt, price }) {
    
  return (
    <>
      <Image src={src} width={50} height={45} alt={alt} />
      <p>Price: {price}</p>
      <Image src="/beansCoins.png" width={10} height={10} alt="beans-coins" />
      <Button>Buy</Button>
    </>
  );
}

