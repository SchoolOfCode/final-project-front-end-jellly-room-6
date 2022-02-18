import { useRouter } from 'next/router'

export default function question({category}){
    console.log(category)
    return (<div>
        <h1>Put {category} question here</h1>
    </div>)
}
