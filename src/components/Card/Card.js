import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faEye } from '@fortawesome/free-solid-svg-icons'
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
   const showAnswre=(answre)=>{
      console.log(answre)
   }
    return (
        <div>
            <div className="question-card">
                <h1 onClick={()=>showAnswre(answre)} className='text-end m-4 eye text-2xl'><FontAwesomeIcon icon={faEye} ></FontAwesomeIcon></h1>
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