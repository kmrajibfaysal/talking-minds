/* eslint-disable react/button-has-type */
import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Job from './job/Job';
import Pricing from './Pricing/Pricing';

function Home() {
    return (
        <div>
            <Banner />
            <div className="bg-[#F4FCFA]">
                <Pricing />
            </div>
            <About />{' '}
            <div className="bg-[#F4FCFA]">
                <Job />
            </div>
        </div>
    );
}

export default Home;
