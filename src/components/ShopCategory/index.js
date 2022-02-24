import React from 'react'
import ShopItem from '../ShopItem/ShopItem'
import style from "../../../styles/shop.module.css"

export default function ShopCategory({categorytitle, data}) {
  return (
    <div className={style.category}>
        <h3>{categorytitle}</h3>
        {data.map((i) => <ShopItem key={i.id} src={i.src} alt={i.alt} price={i.price}/> )}
    </div>
  )
};

