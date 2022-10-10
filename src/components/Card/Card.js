import React, { useState } from 'react';
import Option from '../Options/Option';
import './Card.css'
const Card = ({question}) => {
    const answre=question.correctAnswer
    const options= question.options
    const handleToCorretAns=(option)=>{
      if(answre===option){
        console.log('Your ans is correct')
      }
      else{
        console.log("Your ans is flase")
      }
   }
    return (
        <div>
            <div className="question-card">
                
                <h1 className='text-3xl font-semibold question-text'>Quize:{question.question}</h1>
                {
                    options.map(option=><Option
                     option={option}
                     handleToCorretAns={handleToCorretAns}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Card;