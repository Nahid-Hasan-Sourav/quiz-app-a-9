import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({quiz,handleChange}) => {


   
    const {question,correctAnswer,options,id}=quiz;
    console.log('Quiz Question',correctAnswer);

    // const handleChange=(e,id)=>{
    //     console.log("Radio btn",e.target.value,id);
    // }

    return (
        <div className='col'>
            <div className="card" style={{}}>
              {/* <h6>{question.replace(/[^a-zA-Z ]/g, "")}</h6> */}
              <h6 className='p-2 fw-bold'>{question}</h6>
            <div className="card-questions p-3">
                {
                    options.map((option)=>{
                       return(
                    <div class="form-check my-1   my-3">
                     <input className="form-check-input" 
                     type="radio" 
                     name="flexRadioDefault" 
                     id="flexRadioDefault2"  
                     value={option}
                     
                     onClick={(e)=>handleChange(e,id)}
                    //  onChange={(e)=>handleChange(e)}
                     />{option}
                    <ToastContainer/>
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