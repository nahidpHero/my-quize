import React from 'react';

const Topic = ({topic}) => {
    const {id,name,logo}=topic
    return (
        <div>
          <div className="card w-56 bg-base-100 shadow-xl">
       <figure><img src={logo} alt="" /></figure>
       <div className="card-body">
      <h2 className="card-title text-center">{name}</h2>
      <div className="card-actions">
      <button className="btn btn-primary">Start practice</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Topic;