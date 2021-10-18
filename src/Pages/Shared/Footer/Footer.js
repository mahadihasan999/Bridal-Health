import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (

        <section className="bg-light mt-5">

            <footer class="text-center text-lg-start text-muted container">

                <section
                    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >

                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>



                    <div>
                        <Link to="" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </Link>
                        <Link to="" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </Link>
                        <Link to="" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </Link>
                        <Link to="" class="me-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </Link>
                        <Link to="" class="me-4 text-reset">
                            <i class="fab fa-github"></i>
                        </Link>
                    </div>

                </section>



                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>Bridal Health
                                </h6>
                                <p>
                                    Bridal Health is an online based medical service and selling healthcare product using DocTime website. The service is available 24/7 from anywhere.
                                </p>
                            </div>


                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Service
                                </h6>
                                <p>
                                    <Link to="#!" class="text-reset">About Us</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">How It Works</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">Features</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">Contact Us</Link>
                                </p>
                            </div>



                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to="#!" class="text-reset">For Doctors</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">Blog</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">Terms and Conditions</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">Privacy Policy</Link>
                                </p>
                            </div>



                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">

                                </h6>
                                <p><i class="fas fa-home me-3"></i> Dhanmondi, Dhaka, Bangladesh</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>

                                </p>
                                <p><i class="fas fa-phone me-3"></i> +8801785083764</p>
                                <p><i class="fas fa-print me-3"></i> +8805614258252</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div class="text-center p-4">
                    © 2021 Copyright:
                    <Link class="text-reset fw-bold" to=""> Bridalhealth.com</Link>
                </div>

            </footer>

        </section>
    )

};

export default Footer;

