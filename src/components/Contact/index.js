import React, { useState } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    const [expand, setExpand] = useState(false);
    
    return (
        <div className="Contact" style={{left: expand? "0" : "-2rem"}}>
            <div className="List">
                <a href="https://www.instagram.com/nussynq/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} /> 
                </a>   
            
                <a href="https://www.facebook.com/synqdjs/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebookF}/> 
                </a>

                <a href="https://t.me/Channingbacon" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTelegramPlane}/> 
                </a>

                <a href="https://wa.me/6586880425" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp}/> 
                </a>  
        
                <a href="mailto:nussynq@gmail.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faEnvelope}/> 
                </a>
            </div>
            
            <button className="Arrow" onClick={() => setExpand(e => !e)}>
                {expand? <FontAwesomeIcon icon={faAngleLeft}/>
                        : <FontAwesomeIcon icon={faAngleRight}/>}
            </button>
        </div>
    )
}

export default Contact