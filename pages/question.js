import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0';
import NavBar from "../src/components/NavBar";



export default function question({category, question}){

    const { user, error, isLoading } = useUser();
     
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (!user){
      window.location.href = "/"
    }

    const correctAnswer = question.answer;

    function handleClick(event){

        if(event.target.value !== String(correctAnswer)) {
            console.log("Try Again")
            return
        }
        console.log("Correct")
    }
    
    return user && (<div>
        <NavBar/>
        <h1>Put {category} question here</h1>
        <h1>{question.question}</h1>
        <button onClick={handleClick} value="1">1</button>
        <button onClick={handleClick} value="3">3</button>
        <button onClick={handleClick} value="5">5</button>
        <button onClick={handleClick} value="10">10</button>
    </div>)
}


export async function getServerSideProps(context) {
    return {
        props: {
            category: context.query.category,
            question: {
                question: "Ariel was playing basketball. 1 of her shots went in the hoop. 2 of her shots did not go in the hoop. How many shots were there in total?",
                answer: 3
            }
        }
    }
}