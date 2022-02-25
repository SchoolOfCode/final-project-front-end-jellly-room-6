import React from 'react'
import ShopItem from '../ShopItem/ShopItem'
import style from "../../../styles/shop.module.css"

export default function ShopCategory({categorytitle, data}) {
  return (
    <div>
    <div className={style.categorytitle}><h3>{categorytitle}</h3></div>
    <div className={style.category}>
        {data.map((i) => <ShopItem key={i.id} src={i.src} alt={i.alt} price={i.price}/> )}
    </div>
    </div>
  )
};

