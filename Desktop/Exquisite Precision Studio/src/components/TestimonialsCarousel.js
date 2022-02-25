import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatar/avatar-1.png";
import avatar2 from "../images/avatar/avatar-2.png";
import avatar3 from "../images/avatar/avatar-3.png";
import avatar4 from "../images/avatar/avatar-4.png";


const TestimonialsCarousel = () => {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={3000}
    >

      <>
      <img className="ava" src={avatar1} alt="ALEX REGELMAN"></img>
      <div className="myCarousel">
      <h3>ALEX REGELMAN</h3>
      <p>Co-Founder, COLABRIO
      </p>
      <p>Exquisite Precision is A One-stop Multimedia Studio Providing Bespoke Services in Photography, 
        Videography and Mediabuying to Clients, Brands and Businesses.</p></div>
      </>
      <>
      <img className="ava" src={avatar2} alt="Johnny Doe 2"></img>
      <div className="myCarousel">
      
      <h3>JANET REGELMAN</h3>
      <p>Co-Founder, COLABRIO
      </p>
      <p>Exquisite Precision is A One-stop Multimedia Studio Providing Bespoke Services in Photography, 
        Videography and Mediabuying to Clients, Brands and Businesses.
      </p></div>
      </>
      <>
      <img className="ava" src={avatar3} alt="Jane Doe 3"></img>
      <div className="myCarousel">
      <h3>Jane Doe 3</h3>
      <p>Co-Founder, COLABRIO
      </p>
      <p>Exquisite Precision is A One-stop Multimedia Studio Providing Bespoke Services in Photography, 
        Videography and Mediabuying to Clients, Brands and Businesses.
      </p></div>
      </>
      <>
      <img className="ava" src={avatar4} alt="Janet Doe 4"></img>
      <div className="myCarousel">
      <h3>Janet Doe 4</h3>
      <p>Co-Founder, COLABRIO
      </p>
      <p>Exquisite Precision is A One-stop Multimedia Studio Providing Bespoke Services in Photography, 
        Videography and Mediabuying to Clients, Brands and Businesses.
      </p></div>
      </>
    </Carousel>
  );
}

export default TestimonialsCarousel;
