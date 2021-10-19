import React from 'react';

import "./ContactUs.css"
const ContactUs = () => {
    return (
        <section className="mt-5 contact-section">
            <div className="container">
                <h2 className="text-center text-light contact-us">Contact Us</h2>
                <form className="form">
                    <div class="form-group">
                        <label for="exampleFormControlInput1"></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                    </div>
                    <div class="form-group">
                        <label for=""></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email address" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1"></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Subject" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1"></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Massage"></textarea>
                    </div>
                    <button className="booking-btn px-3 mt-2">Send</button>
                </form>

                <div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;