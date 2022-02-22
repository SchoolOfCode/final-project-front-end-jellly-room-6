import Link from 'next/link'
import styles from './index.module.css';
import { useState } from 'react';

export default function CategoryButton({category, handleClick, disabled}){


    return (
    <Link href={{
        pathname: "/question",
        query: {
            category
        }
    }}>

    

    <a>
    <button disabled={disabled} className={styles.button} onClick={handleClick}>{category}</button>
    </a>

    </Link>)
}