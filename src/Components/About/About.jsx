import React from "react";
import "./About.css";
import mypic from "../../assets/my_pic.jpg";

const About = () => {
    return(
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src ={mypic} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am currently pursuing my B.Tech at VIT Bhopal, where I’m nurturing my passion for technology and innovation. I find immense joy in crafting intuitive, aesthetically pleasing, and functional digital experiences.I’m deeply motivated by the ever-evolving nature of the web and thrive on learning new frameworks, tools, and techniques. With a curious mind and a heart full of ambition, I aspire to create meaningful solutions that leave a lasting impact in the digital world.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style = {{width:"50%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style = {{width:"70%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style = {{width:"60%"}} /></div>
                        <div className="about-skill"><p>Node JS</p><hr style = {{width:"50%"}} /></div>

                    </div>
                </div>
            </div>
            {/* <div className="about-achieves">
                <div className="about-achieve">
                    <h1></h1>
                    <p>Years</p>
                </div>
            </div> */}
        </div>
    )
}


export default About;