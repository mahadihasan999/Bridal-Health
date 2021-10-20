import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from "../../Images/1.jpg"
import image3 from "../../Images/3.jpg"
import "./Banner.css"
const Banner = () => {
    return (
        <section className="banner-section">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="First slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                        <h2 className="logo">Access hundreds of certified and trusted doctors
                            and specialists at anytime from anywhere
                        </h2>
                        <button className="booking-btn">Find the Doctor Now</button>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </section>
    );
};

export default Banner;