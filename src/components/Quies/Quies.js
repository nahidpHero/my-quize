import React from 'react';
import Card from '../Card/Card';

const Quies = ({questions}) => {
    

    return (
        <div>
            {
                questions.map(question=><Card
                 question={question}
                ></Card>)
            }
        </div>
    );
};

export default Quies;