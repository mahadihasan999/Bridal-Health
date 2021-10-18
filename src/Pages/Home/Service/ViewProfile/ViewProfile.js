import React from 'react';
import { useParams } from 'react-router';
import "./ViewProfile.css"
import img from "../../../Images/doc1.jpg"
import { Link } from 'react-router-dom';
const ViewProfile = () => {
    const { serviceId } = useParams()
    return (
        <section className="mt-5">
            <div className="container">
                <div className=" d-flex">
                    <div className="col-md-4">
                        <img className="dr-img" src={img} alt="" height="250" width="250" />
                        <div className="dr-name mt-3"><h4 className=" text-light">Md Mahadi Hasan{ }</h4>
                            <p className="text-light">Engineer</p></div>
                    </div>
                    <div className="tabs col-md-4">

                        <h1>This is profile number {serviceId}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewProfile;