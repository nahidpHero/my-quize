import React from 'react';
import './Topic.css'
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id,name,logo}=topic
    return (
        <div className='container'>
        <div className="card w-56 bg-base-100 shadow-xl">
       <figure><img src={logo} alt="logo"/></figure>
       <div className="card-body">
       <h2 className="card-title text-center">{name}</h2>
      <div className="card-actions">
      <Link to={`course/${id}`} className="btn btn-primary">Start practice</Link>
    </div>
  </div>
</div>
</div>
    );
};

export default Topic;