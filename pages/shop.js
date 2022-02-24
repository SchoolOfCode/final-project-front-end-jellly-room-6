import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "../src/components/NavBar";
import Image from "next/image";
import style from "../styles/shop.module.css";
import ShopItem from "../src/components/ShopItem/ShopItem";
import ShopCategory from "../src/components/ShopCategory";

const data = [{id: 1, src:"/beansCoins.png", alt:"beans-coins", price:150}]

export default function Shop() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    window.location.href = "/";
  }

  return (
    user && (
      <><NavBar/>
      <h1>The Jelly Shop</h1>
      <ShopCategory categorytitle="Color skins" data={data} />     
</>
      
    )
  );
}
