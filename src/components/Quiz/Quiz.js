import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const data=useLoaderData()
    console.log("Thuis is quiz :",data.data.questions
    )
    const [answer,setAnswer]=useState();
    const [count,setCount]=useState(0);
    const handleChange=(e,id) => {
        // console.log("ratio btn",e.target.value,id)
        setAnswer(e.target.value)
        const findAnswer=data.data.questions.find(question=>question.id===id)
        console.log("findAnswer",findAnswer.correctAnswer)
        if(findAnswer.correctAnswer===e.target.value){
           
            setCount(count+1)
            alert("correctAnswer",count);
        }
    }
    return (
        <div className="container">

            <h4 className='fw-bold text-center my-3'>Your Score is : {count}</h4>

            <div className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4 py-3'>
              
            {
              data.data.questions.map((quiz)=>{
                return(
                    <QuizQuestion key={quiz.id} quiz={quiz} handleChange={handleChange}></QuizQuestion>
                )
              })  
            }
            
          </div>
        </div>
    );
};

export default Quiz;