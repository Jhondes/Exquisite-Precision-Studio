import React from "react";
import beauty from "../images/beauty.jpg";
import cool from "../images/cool.jpg";
import nature from "../images/nature.jpg";
import nice from "../images/nice.jpg";

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

// REACT POPUPBOX
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";





const Portfolio = () => {

  const PopupExample = () => (
    <Popup trigger={<button>Trigger</button>} position="top left">
      {close => (
        <div>
          Content here
          <a className="close" onClick={close}>
            &times;
          </a>
        </div>
      )}
    </Popup>
  );


  return (

    

    

    
    <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
          
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">

            <div className="col-md-3 col-sm-6">
              <div className="portfolio-image-box">
                <img className="portfolio-image" src={beauty} alt="beauty-image"/>
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div></div>
         {/* - */} 
         <div className="col-md-3 col-sm-6">
         <div className="portfolio-image-box">
                <img className="portfolio-image" src={cool} alt="cool-image"/>
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div> </div> 
         {/* - */} 
         <div className="col-md-3 col-sm-6">
         <div className="portfolio-image-box">
                <img className="portfolio-image" src={nature} alt="nature-image"/>
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div></div>
          {/* - */} 
          <div className="col-md-3 col-sm-6">
         <div className="portfolio-image-box">
                <img className="portfolio-image" src={nice} alt="nice-image"/>
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            
            </div></div>

            
            
           
            </div>                  
        </div>
        
    </div>
  );
}

export default Portfolio;
