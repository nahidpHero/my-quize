import React from 'react';
import './Topic.css'
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id,name,logo,total}=topic
    return (
        <div className='container3 '>
        <div className="card  w-56 bg-slate-200 shadow-xl">
       <figure><img src={logo} alt="logo"/></figure>
       <div className="card-body">
       <h2 className="card-title text-center">{name}</h2>
       <p className="card-title text-center text-sm">Total Quiz:{total}</p>
      <div className="card-actions">
      <Link to={`course/${id}`} className="btn">Start practice</Link>
    </div>
  </div>
</div>
</div>
    );
};

export default Topic;