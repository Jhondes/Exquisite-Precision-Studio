import React from "react";
import Typed from "react-typed";



const Header = () => {

  

  return (
    <div className="header-wrapper">
        <div className="main-info">
            
            <Typed
            className="Typed-text"
            strings={["Think", "Imagine", "Create"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <a href="#" className="btn-main-offer">DISCOVER MORE</a>
        </div>
    </div>
  );
}

export default Header;
