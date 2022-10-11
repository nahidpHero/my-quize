import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quies from '../Quies/Quies';

const Coursedetails = () => {
    const details=useLoaderData()
    const questions= details.data.questions
    return (
        <div>
            <h1 className='text-3xl'>Quiz Of {details.data.name}</h1>
            {
                questions.map(question=><Quies
                key={question.id}
                questions={questions}
                ></Quies>)
            }
        </div>
    );
};

export default Coursedetails;