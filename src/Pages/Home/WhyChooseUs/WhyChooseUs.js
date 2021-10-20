import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClinicMedical, faCar, faBookMedical, faDiceFive } from '@fortawesome/free-solid-svg-icons'
import "./WhyChooseUs.css"
const element1 = <FontAwesomeIcon icon={faClinicMedical} />
const element2 = <FontAwesomeIcon icon={faCar} />
const element3 = <FontAwesomeIcon icon={faBookMedical} />
const element4 = <FontAwesomeIcon icon={faDiceFive} />
const WhyChooseUs = () => {
    return (
        <section className="choose-us-section">
            <div className="container  col choose-us-container">
                <div className="text-center ">
                    <h1 className="text-light">Why Choose Use</h1>
                    <hr className="text-light" />
                    <p className="text-light">There are many reasons to choose Bridan Healthcare as your private healthcare provider of choice. Choose from one of the options below to find out more</p>
                </div>


                <div className="reason mt-4 row" >
                    <div className="col d-flex">
                        <div className="element"><h1 className="text-light">{element1}</h1></div>
                        <div className="mx-3"><h4>Modern Clinic</h4>
                            <p> primary category is Health and medical</p></div>
                    </div>
                    <div className="col  d-flex">
                        <div className="element"> <h1 className="text-light"> {element2}</h1></div>
                        <div className="mx-3">
                            <h4>Emergency</h4>
                            <p>Sudden illness or injury can occur</p>
                        </div>
                    </div>

                    <div className="col  d-flex">
                        <div className="element"><h1 className="text-light"> {element3}</h1></div>
                        <div className="mx-3">  <h4>Qualified Doctor</h4>
                            <p>We have qualified best doctor</p></div>
                    </div>
                    <div className="col  d-flex">
                        <div className="element">
                            <h1 className="text-light"> {element4}</h1>
                        </div>
                        <div className="mx-3"><h4> Health Care</h4>
                            <p>responsible health care</p></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;