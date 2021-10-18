import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from "../../Images/1.jpg"
import image2 from "../../Images/2.jpg"
import image3 from "../../Images/3.jpg"
import "./Banner.css"
const Banner = () => {
    return (
        <section>
            <div className="container">
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
                            src={image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                            <p className="text-dark">Improve your and loved ones' health and
                                wellbeing, without having to queue or travel.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                            <p className="text-dark">Access your past consultations and prescriptions
                                at any time, and even get your medicine
                                delivered.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
};

export default Banner;