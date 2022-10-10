import React from 'react';
import './Options.css'

const Option = ({option,handleToCorretAns}) => {


    
    return (
        <div >
           <ul className='ul-style'>
             <li onClick={()=>handleToCorretAns(option)}>{option}</li>
           </ul>
        </div>
    );
};

export default Option;