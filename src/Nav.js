import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav() {
const[show,handleShow] = useState(false);
const history = useHistory();

const transitionNavBar = () => {
    if(window.scrollY > 100) {
        handleShow(true);
    }else{
        handleShow(false)
    }
}

useEffect(() => {
    window.addEventListener("scroll", 
    transitionNavBar);
      
    return () => {
        window.removeEventListener('scroll', transitionNavBar);
    }
}, [])

    return <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav__contents">
        <img
        onClick={() => history.push("/")} 
        className="nav__logo"
        src="https://fontmeme.com/permalink/210302/69205a19acd052a0b38a28ff5d8f4135.png" 
        alt=""
        />

        <img
        onClick={() => history.push("/profile")} 
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt=""
        />

            
        </div>
    </div>;
    
}

export default Nav
