import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services path="service"></Services>
            <WhyChooseUs></WhyChooseUs>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;