import React from 'react'
import Image from 'next/image'
import style from '../../../styles/shop.module.css'

export default function InformationCard({username, beans}) {
  return (
    <div className={style.infocard}>
        <h2>{username}</h2>
        <h3>You have {beans} jelly beans</h3>
        <Image src="/Jarbean.png" width={40} height={40} alt="Jar of beans" />
    </div>
  )
}
