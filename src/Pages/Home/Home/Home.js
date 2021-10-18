import React from 'react';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';

import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Services> </Services>

            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;