import { useRouter } from 'next/router'


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

export default function question({category, question}){

    const correctAnswer = question.answer;

    function handleClick(event){

        if(event.target.value !== String(correctAnswer)) {
            console.log("Try Again")
            return
        }
        console.log("Correct")
    }
    console.log(question)
    return (<div>
        <h1>Put {category} question here</h1>
        <h1>{question.question}</h1>
        <button onClick={handleClick} value="1">1</button>
        <button onClick={handleClick} value="3">3</button>
        <button onClick={handleClick} value="5">5</button>
        <button onClick={handleClick} value="10">10</button>
    </div>)
}
