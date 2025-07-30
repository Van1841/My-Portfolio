import React from 'react';
import "./mywork.css";
import mywork_data from '../../assets/Projects_Data';

const mywork = () =>{
    return (
        <div id='work' className='mywork'>
            <div className='mywork-title'>
                <h1>My Projects</h1>
            </div>
            <div className='mywork-container'>
                {mywork_data.map((work, index)=>{
                    return <img key={index} src= {work.w_img} alt=""/>
                })}
            </div>
            <div className='mywork-showmore'>
                <p>Show More</p>
                
            </div>
        </div>
    )
}

export default mywork;