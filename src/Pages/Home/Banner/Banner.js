/* eslint-disable react/button-has-type */
import React from 'react';
import banner from '../../../Assets/banner/banner.jpg';
import './Banner.css';

function Banner() {
    return (
        <div className="home mx-auto mb-32 mt-5 flex w-11/12 flex-col items-center justify-center md:order-2 md:mt-24 md:w-4/5 md:flex-row lg:mt-32">
            <div className="box-shadow2 mt-5 mb-10 w-full max-w-xl md:order-1 md:w-1/2">
                <img className="box-shadow w-full rounded-tl-[150px]" src={banner} alt="" />
            </div>
            <div className="mx-auto mr-10 w-full md:w-1/2">
                <h1 className="lg-text-6xl ml-4 text-4xl font-black text-gray-700 md:text-5xl">
                    Private mental health consultation from a professional
                </h1>

                <p className="my-7 p-5 text-xl text-gray-700">
                    We help our clients address these critical imperatives through intelligent,
                    cloud-based solutions that increase resource capacity, improve workforce
                    productivity, connect data for personalized services across channels, and
                    improve the quality of care and therapeutics.
                </p>
                <div className="flex flex-col lg:flex-row">
                    <button className="mx-4 mb-3 rounded-full bg-root px-[40px] py-[14px] text-white hover:scale-105">
                        Get a consultation
                    </button>
                    <button className="mx-4 mb-3  rounded-full border border-root px-[40px] py-[14px] text-root hover:scale-105">
                        Learn more
                    </button>
                </div>

                <div className="mx-auto mt-6 flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start">
                    <div className="20 px-5">
                        <div className="text-[54px] font-black text-link">20+</div>
                        <p className="text-lg font-bold text-gray-700">
                            Years of <br /> experience
                        </p>
                    </div>
                    <div className="840 px-5">
                        <div className="text-[54px] font-black text-link">840+</div>
                        <p className="text-lg font-bold text-gray-700">
                            Patients received <br /> help this year
                        </p>
                    </div>
                    <div className="98 px-5">
                        <div className="text-[54px] font-black text-link">98%</div>
                        <p className="text-lg font-bold text-gray-700">
                            Effectiveness of <br /> therapy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
