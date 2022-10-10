import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const data=useLoaderData()
    console.log("Thuis is quiz :",data.data.questions.length)
    return (
        <div>
            This is quiz page
        </div>
    );
};

export default Quiz;