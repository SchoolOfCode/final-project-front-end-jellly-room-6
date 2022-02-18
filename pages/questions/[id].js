import {useRouter} from 'next/router'


export default function Question(){

    const router = useRouter();
    const {id} = router.query

    return <h1>Question {id}</h1>
}