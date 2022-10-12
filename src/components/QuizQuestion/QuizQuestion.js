import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
const QuizQuestion = ({quiz,handleChange,index}) => {


   
    const {question,correctAnswer,options,id}=quiz;
    console.log('Quiz Question',correctAnswer);
    
    const setCorrectAnswer=(e)=>{
       
        toast(`Correct Answer : ${correctAnswer} `, {
            className: "text-success fw-bold fs-6",
            bodyClassName: "grow-font-size",
            progressClassName: "fancy-progress-bar",
          });
        //   e.target.style.backgroundColor="red"
    }

    console.log("Quiz Question",quiz);
    // const handleChange=(e,id)=>{
    //     console.log("Radio btn",e.target.value,id);
    // }

    return (
        <div className='col'>
            <div className="card" style={{height:'500px'}}>
              
             <div className="card-header bg-light" style={{height:'240px'}}>
             <h5><span className='mx-1 my-3 d-inline-block bg-success px-2 text-white py-1 rounded'>
                Question :  {index===0 ? index=1 :index+1}</span></h5>

            
              <div className="question d-flex justify-content-between h-50 align-items-center py-1">
              <h6 className='p-2  my-2 fw-bold'> {question.slice(3,question.length-4)}</h6>
              <h5 > <EyeIcon onClick={(e)=>setCorrectAnswer(e,correctAnswer)} className="" style={{height:'25px',cursor:'pointer'}}/></h5> 
            
             </div>
             <ToastContainer/>

            </div>
            <div className="card-questions px-3">
                {
                    options.map((option)=>{
                       return(
                    <div>
                    

                    <div class="form-check my-1   my-3">
                     <input className="form-check-input" 
                     type="radio" 
                     name={id}
                     id="flexRadioDefault2"  
                     value={option}
                     
                     onChange={(e)=>handleChange(e,id)}
                    //  onChange={(e)=>handleChange(e)}
                     />{option}
                    <ToastContainer/>
                    </div>
                    </div>
                       )
                    })
                }
                 
            </div>
            </div>
        </div>
    );
};

export default QuizQuestion;