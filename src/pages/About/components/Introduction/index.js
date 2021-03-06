import React from 'react';
import './index.scss';

function Introduction() {
    return (
        <div className="Introduction">
            <div className="IntroContent">
                
                <h4 style={{marginTop:0}}>About Us</h4>
                
                <p> NUS DJ Collective was founded in 2003 and is known for their electric DJ performances around campus 
                    and in Singapore's entertainment scene from places such as
                    <a href="https://zoukclub.com/" target="_blank" rel="noreferrer"> Zouk</a>, 
                    <a href="https://www.cherrydiscotheque.com/" target="_blank" rel="noreferrer"> Cherry Discotheque</a>, 
                    <a href="https://www.wan-night.com/" target="_blank" rel="noreferrer"> WAN</a>, etc.
                    <br/><br/>
                    NUS DJ Collective aims to empower music enthusiasts and whoever with an interest for DJing; 
                    serving as a platform for them to get first hand experience in DJing in the local DJing Scene.
                    <br/><br/>
                    Through our annual basic course, bonding sessions and gigs all around the country, 
                    those who came for the music; stayed for the family.
                </p>
            
            </div>
        </div>
    )
}

export default Introduction