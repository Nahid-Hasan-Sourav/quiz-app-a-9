import React from 'react';
import { Link } from 'react-router-dom';

const CourseCategory = ({data}) => {
    const {name,id,logo,total}=data
    // console.log("Course ",data)
    return (
        <div className='col '>
            <div className="card bg-light shadow-md">
                <img src={logo} alt='...!!'/>
                <div className="card-details card-footer ">

                <h4 className='fw-bold '>{name}</h4>

                <div className="w-100 h-25 d-flex flex-row align-items-center justify-content-between">
                    <div className="title">
                       <p className='fw-bold'>Question : {total}</p>
                        
                    </div>
                    <div className="btn">
                        <Link to={`/quiz/${id}`}>
                        <button className="btn btn-primary">
                            Start Test
                        </button>
                        </Link>
                    </div>
                </div>

                </div>
               
            </div>
        </div>
    );
};

export default CourseCategory;