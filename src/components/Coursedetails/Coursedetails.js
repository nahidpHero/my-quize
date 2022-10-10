import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Coursedetails = () => {
    const details=useLoaderData()
    const questions= details.data.questions

    
    return (
        <div>
            {
                questions.map(question=>console.log(question))
            }
        </div>
    );
};

export default Coursedetails;