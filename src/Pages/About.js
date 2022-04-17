import React from 'react';
import { FaReact, FaNodeJs, FaSass, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiRedux, SiHtml5, SiCss3, SiFigma, SiBootstrap, SiMaterialui, SiKotlin, SiJavascript} from "react-icons/si";

const About = () => {
    return (
       <div className='container'>
         <div>

           <div className='Skills'>
             <div className="skillstitle">
               <h4>Skills</h4>
             </div>
             <div className='skillsbox'>

             
               <div className='skill'>
                 <SiJavascript className='skillicon'/>
                 <h5>JavaScript</h5>
                </div>
                <div className='skill'>
                  <FaJava className='skillicon'/>
                  <h5>Java</h5>
                </div>
                <div className='skill'>
                 <SiKotlin className='skillicon'/>
                 <h5>Kotlin</h5>
                </div>

                <div className='skill'>
                 <FaReact className='skillicon'/>
                 <h5>React</h5>
                </div>
                <div className='skill'>
                 <SiRedux className='skillicon'/>
                 <h5>Redux</h5>
               </div>
               <div className='skill'>
                 <SiNextdotjs className='skillicon'/>
                 <h5>Nextjs</h5>
               </div>
                 
                <div className='skill'>
                  <SiMongodb className='skillicon'/>
                  <h5>MongoDB</h5>
                </div>
                <div className='skill'>
                 <FaNodeJs className='skillicon'/>
                 <h5>Nodejs</h5>
                </div>
                <div className='skill'>
                 <SiExpress className='skillicon'/>
                 <h5>Expressjs</h5>
                </div>
              
                <div className='skill'>
                    <SiHtml5 className='skillicon'/>
                   <h5>Html</h5>
                 </div>
                  <div className='skill'>
                   <SiCss3 className='skillicon'/>
                   <h5>Css</h5>
                 </div>
                 <div className='skill'>
                   <SiBootstrap className='skillicon'/>
                   <h5>Bootstrap</h5>
                 </div>

               <div className='skill'>
                 <SiMaterialui className='skillicon'/>
                 <h5>Material UI</h5>
                </div>
                <div className='skill'>
                 <FaSass className='skillicon'/>
                 <h5>Sass</h5>
                </div>  
                <div className='skill'>
                 <SiFigma className='skillicon'/>
                 <h5>Figma</h5>
                </div>  
             </div>        
          </div>
        
         <div className='about'>
             <div className="abouttitle">
               <h4>About Me</h4>
             </div>
             <div className="aboutdescription">
               <p> I am a FullStack web Developer with some UI/UX Design Skills. And I am a junior android app developer. <br></br>
                   I have two years of experience in building websites
                   from small ones to interactive web applications. <br></br>
                   I am highly motivated and well organized.
                   And I am always curious to learn new things.<br></br> </p>                           
             </div>   
           </div>
          </div>
       </div>
    )
}

export default About;
