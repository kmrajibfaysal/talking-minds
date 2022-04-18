/* eslint-disable react/button-has-type */
import React from 'react';
import AboutMeP from '../../../Assets/banner/abouteMe.jpg';
import '../Banner/Banner.css';

function About() {
    return (
        <div
            id="about"
            className="mx-auto mb-32 mt-5 flex w-11/12 flex-col items-center justify-center md:order-2 md:mt-24 md:w-4/5 md:flex-row lg:mt-32"
        >
            <div className="box-shadow2 mt-5 mb-10 w-full max-w-xl md:order-1 md:w-1/2">
                <img className=" w-full rounded-tl-[150px]" src={AboutMeP} alt="" />
            </div>
            <div className="mx-auto mr-10 w-full md:w-1/2">
                <h1 className="lg-text-6xl ml-4 text-4xl font-black text-gray-700 md:text-5xl">
                    Dr. Merry Stone — licensed mental health counselor, psychotherapist
                </h1>

                <p className="my-7 p-5 text-xl text-gray-700">
                    I help my clients address these critical imperatives through intelligent,
                    cloud-based solutions that increase resource capacity.
                </p>

                <div className="mt-6 flex flex-col lg:flex-row">
                    <div>
                        <li className="my-3 list-none text-gray-700">
                            <span className=" text-link">
                                <svg
                                    className="inline h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                            <span className="ml-2 text-lg font-bold hover:text-link ">
                                Personal Consultations
                            </span>
                        </li>
                        <li className="my-3 list-none text-gray-700">
                            <span className=" text-link">
                                <svg
                                    className="inline h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                            <span className="ml-2 text-lg font-bold hover:text-link ">
                                Couple Problem
                            </span>
                        </li>
                        <li className="my-3 list-none text-gray-700">
                            <span className=" text-link">
                                <svg
                                    className="inline h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                            <span className="ml-2 text-lg font-bold hover:text-link ">
                                Online Therapy
                            </span>
                        </li>
                    </div>
                    <div className="lg:ml-10">
                        <li className="my-3 list-none text-gray-700">
                            <span className=" text-link">
                                <svg
                                    className="inline h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                            <span className="ml-2 text-lg font-bold hover:text-link ">
                                Online Therapy
                            </span>
                        </li>
                        <li className="my-3 list-none text-gray-700">
                            <span className=" text-link">
                                <svg
                                    className="inline h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                            <span className="ml-2 text-lg font-bold hover:text-link ">
                                Online Therapy
                            </span>
                        </li>
                    </div>
                </div>
                <button className="mx-1 mt-5 rounded-full bg-root px-[40px] py-[14px] text-white hover:scale-105">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default About;
