
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { name, expertise, img, id } = service;

    return (


        <div className="service pb-3">
            <div className="detail text-center">
                <img src={img} alt="" height="150" width="150" />
                <h4>{name}</h4>
                <p>{expertise}</p>
                {/* <h6>{rating}</h6> */}

                <Link to={`/viewProfile/${id}`}>
                    <button className="btn-outline-light mx-2 view-btn">View Profile</button>
                </Link>

                <Link to={`/booking/${id}`}>
                    <button className="booking-btn  btn-light">Booking</button>
                </Link>

            </div>
        </div>

    );
};

export default Service;