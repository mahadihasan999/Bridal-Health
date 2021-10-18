import React, { useState } from 'react';
import './Service.css';
import ViewProfile from './ViewProfile/ViewProfile';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { name, expertise, img, rating, id } = service;

    return (


        <div className="service pb-3">
            <div className="detail text-center">
                <img src={img} alt="" height="150" width="150" />
                <h4>{name}</h4>
                <p>{expertise}</p>
                <h6>{rating}</h6>

                <Link to={`/viewProfile/${id}`}>
                    <button className="btn-outline-light mx-2 view-btn">View Profile</button>
                </Link>
                <button className="booking-btn  btn-light"> Booking</button>





            </div>
        </div>

    );
};

export default Service;