 import React from "react";
 import logo from "../logo.png";
 import {Link} from "react-scroll";
 // REACT FONTAWESOME IMPORTS
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faBars } from "@fortawesome/free-solid-svg-icons";
 const Navbar = () => {
   return (
    <nav class="navbar navbar-expand-sm navbar-light bg-dark fixed-top">
      <div className="container">

     
	  
		<a class="navbar-brand" href="#"><img className="logo" src={logo} alt=""/></a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
		</button>
		<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		  <ul class="navbar-nav ">
			
			<li class="nav-item">
			  <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">about</Link>
			</li>			
      
			<li class="nav-item">
			  <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">services</Link>
			</li>			
      
			<li class="nav-item">
			  <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">portfolio</Link>
			</li>			
      
			<li class="nav-item">
			  <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">contact</Link>
			</li>			
		  </ul>		  
		</div>
	  </div>
    
	</nav>
        
   );
 }
 
 export default Navbar;
 