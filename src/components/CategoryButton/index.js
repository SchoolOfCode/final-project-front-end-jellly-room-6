import Link from 'next/link'

export default function CategoryButton({category, handleClick}){
    return (
    <Link href={`/question`}>

    <a>
    <button onClick={handleClick}>{category}</button>
    </a>

    </Link>)
}