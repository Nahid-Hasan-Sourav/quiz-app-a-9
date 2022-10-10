import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../Header/Header';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <Header></Header>
            <div style={{height:600}} className="error  d-flex flex-column justify-content-center align-items-center">
                <h1>Opps!! This is an Error </h1>
                {
                    error && (
                        <div className='d-flex'>
                            <h6 className='mx-1 fw-bold'>{error.statusText || error.message}</h6>
                            <h6 className='text-danger fw-bold'>{error.status}</h6>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ErrorPage;