import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const datas=useLoaderData()
    const data=datas.data;
    console.log(data)


    return (
        <div className='m-5'>
            <ResponsiveContainer width={500} height={400}>
            <BarChart width={500} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
           </ResponsiveContainer>
        </div>
    );
};

export default Statistics;