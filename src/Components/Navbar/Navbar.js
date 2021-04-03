import React, { useState } from 'react';
import { BsPhone } from 'react-icons/bs/index';
import { AiFillCloseSquare, AiOutlineBars, AiOutlineMail } from 'react-icons/ai/index';
import './Navbar.css';




const Navbar = () => {



    const [toggle, setToggle] = useState(true) 

    const handleToggle = () => {
        setToggle(!toggle)
    }






    return (

        
        <div className="navbar">
            
            <div className="container">
                
                <div className="logo">
                <img src="image/Asset 2.png" alt="logo"/>
                </div>

                <div className="contacts">
                <a href="tel:+966-599-9050-12"> <BsPhone/>Call Us</a> ||
                <a href="mailto:someone@yoursite.com"> <AiOutlineMail/>   Email Us</a>
                </div>
                
                <div>


                { toggle? <AiOutlineBars className="bars" onClick={handleToggle} /> : <AiFillCloseSquare className="bars" onClick={handleToggle}/>}
                <ul className={toggle? "ul-list" : "activate"}>
                    <li className="list-item"><a href="#home">Home</a></li>
                    <li className="list-item"><a href="#about-us">About Us</a></li>
                    <li className="list-item"><a href="#service">Service</a></li>
                    <li className="list-item"><a href="#why-us">Why Us</a></li>
                    
                </ul>
                </div>
                
                
            </div>
        </div>
    )
}

export default Navbar
