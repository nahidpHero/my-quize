import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quies from '../Quies/Quies';
import './Coursedetails.css'

const Coursedetails = () => {
    const details=useLoaderData()
    const questions= details.data.questions
    return (
            <div>
            <h1 className='text-4xl font-bold text-cyan-600'>Quiz Of {details.data.name}</h1>
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