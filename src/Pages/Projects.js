import React from 'react';
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div className='container'>
      <div className='projects'>
        <div className='projectstitle'>
         <h4>Projects</h4> 
        </div>
        <div className='cards'>
        <div className='card'>          
          <h5><a href="https://github.com/myriemsl/LinkedInClone-Backend">LinkedIn Clone<FiExternalLink/></a></h5>
          <p>backend linkedIn-clone</p>
        </div>
        <div className='card'>          
          <h5><a href="https://github.com/myriemsl/contact-app">Contact App<FiExternalLink/></a></h5>
          <p>mern stack contact app</p>
        </div>
        <div className='card'>          
          <h5><a href="https://github.com/myriemsl/music-app">Music App<FiExternalLink/></a></h5>
          <p>mern stack music app</p>
        </div>  
        <div className='card'>          
          <h5><a href="https://github.com/myriemsl/chat-app">Chat App<FiExternalLink/></a></h5>
          <p>mern stack chat app</p>
        </div>  
         </div>  
        <div className='cards'>
        <div className='card'>
          <h5><a href="https://github.com/myriemsl/DigitalAgency">Digital Agency<FiExternalLink/></a></h5>
          <p>react responsive website</p>
        </div>
        <div className='card'>
          <h5><a href="https://github.com/myriemsl/healthcare-website">HealthCare Website<FiExternalLink/></a></h5>
          <p>react responsive website</p>
        </div>
        <div className='card'>          
          <h5> <a href="https://github.com/myriemsl/todo">Todo List<FiExternalLink/></a></h5>
          <p>react and redux todo list app</p>
        </div>
      </div>          
    </div>
    </div>
  )
}

export default Projects;

