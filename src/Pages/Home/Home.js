/* eslint-disable react/button-has-type */
import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Pricing from './Pricing/Pricing';

function Home() {
    return (
        <div>
            <Banner />
            <div className="bg-[#F4FCFA]">
                <Pricing />
            </div>
            <About />
        </div>
    );
}

export default Home;
