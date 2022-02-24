import React from 'react'
import ShopItem from '../ShopItem/ShopItem'

export default function ShopCategory({categorytitle, data}) {
  return (
    <div>
        <h3>{categorytitle}</h3>
        {data.map((i) => <ShopItem key={i.id} src={i.src} alt={i.alt} price={i.price}/> )}
    </div>
  )
};

