import React from 'react';
import "./hero.css";
import mypic from "../../../assets/my_pic.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const hero = () => {
    return(
        <div id='home' className = 'hero'>
            <img src ={mypic} alt=" " />
            <h1>Vanshika Bhojani</h1>
            <p>Hey, I’m a Computer Science undergraduate at VIT Bhopal University with an insatiable appetite for innovation and a meticulous eye for detail. My academic journey is a confluence of theoretical depth and hands-on pragmatism. </p>
            <div className='hero-action'>
                <div className='hero-connect'><AnchorLink className="anchor-link" offset ={50} href='#contact'>Connect with me</AnchorLink></div>
                {/* <div className='hero-resume'>My resume</div> */}
                <a href="/VANSHIKA_BHOJANI_RESUME.pdf" className="hero-resume" target="_blank" rel="noopener noreferrer">My Resume</a>

            </div>
        </div>
    )
}

export default hero;