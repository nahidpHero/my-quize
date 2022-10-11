import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import Option from '../Options/Option';
import './Card.css'
const Card = ({question}) => {
   const [show,setShow]=useState([])
   const [ans,setAns]=useState([])
    const answre=question.correctAnswer
    const options= question.options

    const notify = () => toast("Your answre is correct",{
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const notify2 = () => toast("worng",{
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const handleToCorretAns=(option)=>{
      if(answre===option){ 
        notify()
      }
      else{
        notify2()
      }
   }
   const showAnswre=(answre)=>{
      setShow(answre)
      setAns('Answer :')
   }
    return (
        <div>     
            <div className="question-card">
                 <h1 onClick={()=>showAnswre(answre) } className='text-end m-4 eye text-2xl'><FontAwesomeIcon icon={faEye} ></FontAwesomeIcon></h1>
                <h1 className='text-3xl font-semibold question-text'>Quize:{question.question}</h1>
                {
                    options.map(option=><Option
                     option={option}
                     handleToCorretAns={handleToCorretAns}
                     notify={notify}
                    ></Option>)
                }
                {
                  <h1 className='text-3xl mt-3 text-black font-semibold '>{ans}{show}</h1>
                }
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Card;