import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div className='footer'>

         <div className='footerdetails'>
             <div className='footerdetail'>    
             <h6 style={{color:'#d0a2e7', fontSize:'1em'}}>myriem s.l</h6>
             <h5>FullStack Developer</h5>  
           </div> 
           <div>
             <h6>Follow me on </h6> 
             <h5>Github  <a href="https://github.com/myriemsl"><FontAwesomeIcon icon={faGithub} className="socialicon"/></a></h5>
           </div>
           <div>    
             <h6>Contact me on</h6>
             <h5>contact@myriemsl.dev</h5>  
           </div>
         </div>

         <div className='footercopyright'>
            <h6>© 2022 | myriemsl.dev</h6>
         </div>

        </div>
       
    )
}

export default Footer;
