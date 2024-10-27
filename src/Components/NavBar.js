import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import { useNavigate } from "react-router-dom";



function NavBar() {
  const navigate = useNavigate();
  const img = "https://i.pinimg.com/564x/2e/4f/d3/2e4fd3fd8f2aff9c26b15c1f1c23b11e.jpg"

  const handleSignUp = () => {
    navigate(`/signup`, { state: { img } });
  }
  return (
    <div className="navbar">
      <img
        className="img1"
        src="data:image/png;base64,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" alt="logo" id="imagelogo"
        />

      
      
      <nav className="nav">

      <header>
      <a href="#" id="textlogo">WonderAdventures</a>
      <ul class="navbar" >
       <NavLink to="/"> <li><a href="#home">Home</a></li></NavLink> 
       <NavLink to="/booking"> <li><a href="#about">Booking</a></li></NavLink>
       <NavLink to="/contact"> <li><a href="#gamesdiv">Contact</a></li></NavLink>
        <NavLink to="/review"><li><a href="#contact">Review</a></li></NavLink>
      </ul>
      
    </header>
       
      </nav>
      <img
        className="img2"
        src="https://i.pinimg.com/564x/2e/4f/d3/2e4fd3fd8f2aff9c26b15c1f1c23b11e.jpg"
       onClick={handleSignUp} />
    </div>
  );
}

export default NavBar;