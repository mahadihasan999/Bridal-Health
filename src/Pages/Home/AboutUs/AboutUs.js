import React from 'react';
import img1 from "../../Images/mission.jpg"
import img2 from "../../Images/vission.png"
import "./AboutUs.css"
const AboutUs = () => {
    return (
        <section className=" mt-5">
            <div className="container">
                <div>
                    <h2 className="text-center">About us</h2>
                    <div className="about-photo d-flex">
                        <div>
                            <img src={img1} alt="" />
                            <li> Imporve the Health and Wellbeing of the populations we serve </li>
                            <li>Provive accesible and afforadable health service trhough advanced technology</li>
                        </div>
                        <div>
                            <img className=" mt-3" src={img2} alt="" />

                            <li>Be The champion of the health service inthe selected developing markets</li>
                            <li>Focus on both high-volume medical assements and the biggest health issues</li>
                        </div>
                    </div>
                    <hr />
                    <div className="about-bridal-health   mt-3">
                        <p className="justify-content-center">Bridal Health is an online a medical service targeting emerging markets that are rapidly digitising. Our mission is to improve the health and wellbeing of the populations we serve. We have developed accessible and affordable telehealth services that aims to support the public health system, research and clinical trials.

                            Bridal Health offers on-demand GP and specialist consultations with verified and certified doctors, online prescriptions, medicine delivery, pathology/ diagnostics tests, all while building valuable Electronic Health Records.

                            Bridal Health is vertically integrated with pharmacies/ medicine delivery suppliers, labs/ diagnostics centres, and payment providers for an end-to-end digital health experience.

                            Bridal Health systematically focuses on expanding access to affordable healthcare services to all. We promise to improve our solutions continuously through our scalable technology and data analytics capabilities. Our passionate team is committed to excellence and work extremely hard to ensure we make a positive contribution to the healthcare of the future. </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;