/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import couples from '../../../Assets/icon/couples.png';
import depression from '../../../Assets/icon/depression.png';
import individual from '../../../Assets/icon/individual.png';

function Job() {
    const navigate = useNavigate();
    const handleBtn = () => navigate('/checkout');
    return (
        <div className="mx-auto w-11/12  py-24 md:w-4/5 md:py-36 ">
            <div>
                <h1 className="lg-text-6xl ml-4 text-center text-4xl font-black text-gray-700 md:text-5xl">
                    What I am Offerring
                </h1>
                <p className=" mt-3 text-center text-xl text-gray-700">
                    Any mental related help you need to maintain your daily life and health
                    assurance.
                </p>
            </div>

            <div className="mx-auto mt-9 flex max-w-7xl flex-col items-center justify-between  md:flex-row">
                <div className="mx-4 my-5 max-w-md rounded-3xl bg-white p-12  shadow transition duration-150 ease-out hover:shadow-lg hover:ease-in">
                    <img className="mb-4" src={depression} alt="" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        Depression Therapy
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                        reverse chronological order.
                    </p>
                    <button
                        onClick={handleBtn}
                        className="mt-2 font-bold text-root hover:scale-105"
                    >
                        More info -->
                    </button>
                </div>
                <div className="mx-4 my-5 max-w-md rounded-3xl bg-white p-12  shadow transition duration-150 ease-out hover:shadow-lg hover:ease-in">
                    <img className="mb-4" src={couples} alt="" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        Couples Counseling
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                        reverse chronological order.
                    </p>
                    <button
                        onClick={handleBtn}
                        className="mt-2 font-bold text-root hover:scale-105"
                    >
                        More info -->
                    </button>
                </div>
                <div className="mx-4 my-5 max-w-md rounded-3xl bg-white p-12  shadow transition duration-150 ease-out hover:shadow-lg hover:ease-in">
                    <img className="mb-4" src={individual} alt="" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        Individual Therapy
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                        reverse chronological order.
                    </p>
                    <button
                        onClick={handleBtn}
                        className="mt-2 font-bold text-root hover:scale-105"
                    >
                        More info -->
                    </button>
                </div>
            </div>
            <div className="mx-auto flex items-center justify-center">
                <button
                    onClick={handleBtn}
                    className="mx-4 mb-3 mt-5 rounded-full bg-root px-[40px] py-[14px] font-bold text-white hover:scale-105"
                >
                    All Programs
                </button>
            </div>
        </div>
    );
}

export default Job;
