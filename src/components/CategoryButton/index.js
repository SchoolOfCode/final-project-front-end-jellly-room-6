import Link from 'next/link'

export default function CategoryButton({category, handleClick}){
    return (
    <Link href={{
        pathname: "/question",
        query: {
            category
        }
    }}>

    <a>
    <button onClick={handleClick}>{category}</button>
    </a>

    </Link>)
}