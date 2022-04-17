/* eslint-disable react/button-has-type */
import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Banner from './Banner/Banner';
import Job from './job/Job';
import Pricing from './Pricing/Pricing';

function Home() {
    return (
        <div>
            <Banner />
            <div className="bg-[#F4FCFA]">
                <Job />
            </div>
            <AboutMe />
            <div className="bg-[#F4FCFA]">
                <Pricing />
            </div>
        </div>
    );
}

export default Home;
