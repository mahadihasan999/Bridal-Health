import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./ViewProfile.css"

const ViewProfile = () => {
    let { serviceId } = useParams()

    const [doctoDetails, setDoctorDetails] = useState([])


    useEffect(() => {
        fetch(`/doctor.json`)
            .then(res => res.json())
            .then(data => setDoctorDetails(data.doc))

    }, [])

    const foundData = doctoDetails.find(doc => doc.id == serviceId)


    return (
        <section className="view">
            <div className="container">
                <div className=" d-flex">
                    <div className="col-md-4">
                        <img className="dr-img" src={foundData?.img} alt="" height="250" width="250" />
                        <div className="dr-name mt-3"><h4 className=" text-light text-center">{foundData?.name}</h4>
                            <p className="text-light text-center"> Expertise: {foundData?.expertise}</p></div>
                    </div>
                    <div className="tabs col-md-4">
                        <h2> Degree </h2>
                        <hr />
                        <h1>{foundData?.qualification}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewProfile;