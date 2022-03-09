import React from "react";
import Image from "next/image";
import style from "./InformationCard.module.css";

export default function InformationCard({ username, beans }) {
  return (
    <div className={style.container}>
      <h2 className={style.username}>{username}</h2>
      <div className={style.beanAmountContainer}>
        <h3>You have {beans} jelly beans</h3>
        <div className={style.beans}>
          <Image src="/Jarbean.png" width={125} height={150} alt="Jar of beans" />
          <div className={style.beanAmount}>

          <p >{beans}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
