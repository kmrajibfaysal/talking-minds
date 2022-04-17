/* eslint-disable react/button-has-type */
import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Banner from './Banner/Banner';
import Job from './job/Job';

function Home() {
    return (
        <div>
            <Banner />
            <div className="bg-[#F4FCFA]">
                <Job />
            </div>
            <AboutMe />
        </div>
    );
}

export default Home;
