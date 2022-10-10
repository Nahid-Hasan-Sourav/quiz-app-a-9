import React from 'react';
import Lottie from 'lottie-react';
import Exam from '../../Assets/101391-online-test.json';
import "../../components/Topics/Topics.css";
import { useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';

const Topics = () => {

    const data=useLoaderData();
    console.log("Data : ",data);

    return (
        <div className='container'>
            <div className="row row-cols-lg-2 row-cols-1 header-cover bg-light">
                <div className="col p-3">
                    <div className="header-text h-100 d-flex flex-column align-items-center justify-content-center">
                        <h3 className='fw-bold text-primary'>Organize Live Quiz For Your Skill Test</h3>
                        <p className='text-center'>myQuiz is a web-based Audience Engagement Cloud Platform for hosting interactive trivia quizzes at in-person, virtual, and hybrid events. No app install is required</p>
                        <button className='btn btn-primary fw-bold'>SKILLS TEST</button>
                    </div>
                </div>
                <div className="col p-3">
                    <div className="header-animation">
                    <Lottie animationData={Exam} loop={true} id="header-animation"></Lottie>
                    </div>
                  
                </div>

            </div>
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 py-5 g-4">
                {
                    data.data.map((data)=>{
                        return(
                            <CourseCategory id={data.id} data={data} />
                        )
                    })

                }
            </div>
        </div>
    );
};

export default Topics;