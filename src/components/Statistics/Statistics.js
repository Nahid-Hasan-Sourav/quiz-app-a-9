import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Tooltip, XAxis, YAxis,CartesianGrid,ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [topics,setTopics]=useState();
    console.log("all data")
    const data=useLoaderData()
    useEffect(() => { 
        // const topicLoaded=data.data;
        const topicData=data.data.map(topic=>{
             console.log("Barchart",topic.total);
            const singleTopic={
                name:topic.name,
                total:topic.total

            }
           
            return singleTopic; 
            
        })
        setTopics(topicData);
    },[])
    console.log("This is Statistics",data.data.name);
    return (
       <div className='container '>
        <h5 className='bg-success mx-auto px-2 py-3 text-white my-4 text-center rounded' style={{width:'190px'}}>QUIZ STATISTICS</h5>
         

        <ResponsiveContainer width="95%" height={400}>
        <BarChart
                 width={400}
                 height={300}
                 data={topics}
                 margin={{
                 top: 5,
                 right: 30,
                 left: 20,
                 bottom: 5
                }}
                >
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="total" fill="#82ca9d" />
       <XAxis dataKey="name"/>
       <YAxis />
    
       <Tooltip />
     
      </BarChart>
        </ResponsiveContainer>
              
      
               
              
        
   
       </div>
    );
};

export default Statistics;