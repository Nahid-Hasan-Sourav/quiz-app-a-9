import React from 'react';
import { Link } from 'react-router-dom';

const CourseCategory = ({data}) => {
    const {name,id,logo}=data
    console.log("id",id)
    return (
        <div className='col '>
            <div className="card bg-light ">
                <img src={logo} alt='...!!'/>
                <div className="card-footer w-100 h-25 d-flex flex-row align-items-center justify-content-between">
                    <div className="title">
                        <h6>{name}</h6>
                        
                    </div>
                    <div className="btn">
                        <Link to={`/quiz/${id}`}>
                        <button className="btn btn-primary">
                            Lets Test
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCategory;