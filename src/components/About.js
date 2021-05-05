import React from "react";
import avi from '../img/laugh.jpg'

const About = () => {
    return (
        <div className="about m-3 row">
           

            <div className="col col-md-9">
            <main>
            <h3>
             Valentine Eze<span className="full-stop"></span>
            </h3>
                <hr className="gold-hr" />
                <p className='text-justify'>
                    I am a MERN Fullstack developer, and i highly welcome you to my blog! You are highly  appreciated
                </p>
                <p className='text-justify'>
                    I hold a BA in philosophy, were i majored in philosophy of ethics vis a vis new age technology. I am an Artificial Intelligence enthusiast, programmer and i write my experiences about them.
                </p>
                <p className='text-justify'>
                   I hope you have a great time here!
                </p>
                <hr className="gold-hr" />
                
                <p className='text-justify'>
                  My stacks includes Javascript, React, Database, MongoDB and mongoose, Form Testing, Node.js, Git, Github, Deployment, Express.js, Shell Scripting, Html/Css, NPM, Bootstrap, Tailwind CSS, Figma. 
                  
                </p>
            </main>
            </div>

            <div className="col col-md-3">
                <img className='rounded ' style={{width: 200, height:'auto'}} src={avi} alt="myimage"/>
            </div>
            
          
        </div>
    );
};

export default About;
