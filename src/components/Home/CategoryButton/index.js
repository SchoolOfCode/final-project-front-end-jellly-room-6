import Link from 'next/link'
import styles from './index.module.css';

export default function CategoryButton({category, disabled, user}){


    return (
    <Link href={{
        pathname: "/question",
        query: {
            category, user
        }
    }}>

    

    <a>
    <button disabled={disabled} className={styles.button}>{category}</button>
    </a>

    </Link>)
}