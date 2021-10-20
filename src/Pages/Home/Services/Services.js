import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <section>
            <div className="container py-5">
                <div className="text-primary text-center mt-5">

                    <h1 className="logo1">Just What the doctor ordered</h1>
                    <p className="logo1"> Private Patients, International organizations and corporate feel safe and cofrtabel in establishing realtionship</p>
                </div>
                <div className="service-container">
                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            ></Service>

                        )


                    }
                </div>
            </div>
        </section>
    );
};

export default Services;