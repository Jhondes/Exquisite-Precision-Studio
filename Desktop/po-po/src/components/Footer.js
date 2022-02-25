import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    
                    <div className="d-flex">
                        <a href="tel:+4.930.705.5448">+4.930.705.5448</a>
                    </div>
                    <div className="d-flex">
                        <p>info@epstudio.ng</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6">
                    <div className="row">
                        <div className="col">
                            <a className="footer-nav">About Us</a>
                            <br />
                            <a className="footer-nav">Services</a>
                            <br />
                        </div>
                        <div className="col">
                        <a className="footer-nav">Portfolio</a>
                        <br />
                            <a className="footer-nav">Contact</a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                        <FacebookShareButton
                            url={"www.ng.com"}
                            quote={"Hi"}
                            hashtag="#HiHi">
                            
                            <FacebookIcon className="mx-3" size={36} />
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={"www.ng.com"}
                            quote={"Hi"}
                            hashtag="#HiHi">
                            
                            <TwitterIcon className="mx-3" size={36} />
                        </TwitterShareButton>

                        
                        
                    </div>
                    <p className="pt-3 text-center">
                        Copyright&copy;
                        {new Date ().getFullYear()}&nbsp;Exquisite Precision Studio.  All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
