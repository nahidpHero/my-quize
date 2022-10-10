import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const data=useLoaderData();
    const topics=data.data;

    return (
        <div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-10'>
           {
            topics.map(topic=><Topic
            key={topic.id}
            topic={topic}
            ></Topic>)
           } 
        </div>
        </div>
    );
};

export default Topics;