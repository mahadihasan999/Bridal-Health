import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClinicMedical, faCar, faBookMedical, faDiceFive } from '@fortawesome/free-solid-svg-icons'
import "./WhyChooseUs.css"
import images from "../../Images/img-4.png"
const element1 = <FontAwesomeIcon icon={faClinicMedical} />
const element2 = <FontAwesomeIcon icon={faCar} />
const element3 = <FontAwesomeIcon icon={faBookMedical} />
const element4 = <FontAwesomeIcon icon={faDiceFive} />
const WhyChooseUs = () => {
    return (
        <section className="choose-us-section">
            <div className="container d-flex col">
                <div className="col-md-6">
                    <img src={images} alt="" height="600px"
                    />
                </div>

                <div className=" mt-5">
                    <h1>Why Choose Use</h1>
                    <p className="text-light">There are many reasons to choose Bridan Healthcare as your private healthcare provider of choice. Choose from one of the options below to find out more:</p>


                    <div className="reason mt-4 row" >
                        <div className="col d-flex">
                            <div className="element"><h1>{element1}</h1></div>
                            <div className="mx-3"><h4>Modern Clinic</h4>
                                <p> primary category is Health and medical</p></div>
                        </div>
                        <div className="col  d-flex">
                            <div className="element"> <h1> {element2}</h1></div>
                            <div className="mx-3">
                                <h4>Emergency</h4>
                                <p>Sudden illness or injury can occur</p>
                            </div>
                        </div>

                        <div className="col  d-flex">
                            <div className="element"><h1> {element3}</h1></div>
                            <div className="mx-3">  <h4>Qualified Doctor</h4>
                                <p>We have qualified best doctor</p></div>
                        </div>
                        <div className="col  d-flex">
                            <div className="element">
                                <h1> {element4}</h1>
                            </div>
                            <div className="mx-3"><h4> Health Care</h4>
                                <p>responsible health care</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;