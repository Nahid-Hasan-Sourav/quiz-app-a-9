import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Quiz = () => {
    const data=useLoaderData()
    console.log("Thuis is quiz :",data.data
    )
    const [answer,setAnswer]=useState();
    // const [count,setCount]=useState(0);
    const handleChange=(e,id) => {
        // console.log("ratio btn",e.target.value,id)
        setAnswer(e.target.value)
        const findAnswer=data.data.questions.find(question=>question.id===id)
        console.log("findAnswer",findAnswer.correctAnswer)
        if(findAnswer.correctAnswer===e.target.value){
            toast(`The correct Answer is ! ${findAnswer.correctAnswer}`, {
                className: "text-success",
                bodyClassName: "grow-font-size",
                progressClassName: "fancy-progress-bar",
              });
            // setCount(count+1)
            // alert("correctAnswer",count);
        }
        else{
            toast(`Wrong Answer !`);
        }
    }
    return (
        <div className="container">

            <h3 className='text-center fw-bold my-3'>Test of <span className='text-primary'>{data.data.name}</span></h3>
            {/* <h4 className='fw-bold text-center my-3'>Your Score is : {count}</h4> */}

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