import React from "react";




const Contacts = () => {

    

   

  return (
    <div id="contacts" className="contacts">
        <div className="text-center">
        <h1>contact us</h1>

        <div className="container">
        <div className="row">
            <div className="col-md-6 col-xs-12">
<p className="ci">Contact info.</p>

<p className="ci2"> info@epstudio.ng</p>
<p className="ci2">+4.930.705.5448</p>
                </div>


                
        
            <div className="col-md-6 col-xs-12">

            <p className="vu">Visit Us.</p>
<p className="vu2">295 Witting Streets Suite 666,
Melbourne, Australia.</p>
<p className="vu2"> 3 Chapel Street, Off Comercial Avenue, 
    Sabo Yaba, 
    Lagos Nigeria (beside whitehouse canteen).</p>
                </div></div></div>




        <p className="fill">Please fill out the form and desccribe your project needs and we'll
            contact you as soon as possible.
        </p>
    </div>

    

    <div className="container">
        <div className="row">
            <div className="col-md-6 col-xs-12">
                {/* NAME INPUT */}
                <div className="text-center">
                <input
               
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                />
                <div className="line"></div>
                </div>
                {/* PHONE INPUT */}
                <div className="text-center">
                <input
               
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                />
                <div className="line"></div>
                </div>
                {/* EMAIL INPUT */}
                <div className="text-center">
                <input
               
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                />
                <div className="line"></div>
                </div>
                {/* SUBJECT INPUT */}
                <div className="text-center">
                <input
                
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                />
                <div className="line"></div>
                </div>
            </div>
            <div className="col-md-6 col-xs-12">
                {/* DESCRIPTION */}
                <div className="text-center">
                <textarea
                
                type="text"
                className="form-control"
                placeholder="Pls describe your project...."
                name="description"
                ></textarea>
                <div className="line"></div>
                </div>
                <div className="btn-main-offer contact-btn" type="submit"><center>Submit</center></div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Contacts;
