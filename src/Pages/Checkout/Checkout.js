/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */

import React from 'react';

function CheckOut() {
    return (
        <div className="mx-auto w-11/12  py-24 md:w-4/5 md:py-36 ">
            <div>
                <h1 className="lg-text-6xl ml-4 text-center text-4xl font-black text-gray-700 md:text-5xl">
                    Pricing
                </h1>
                <p className=" mt-3 text-center text-xl text-gray-700">
                    Here are three types of service plan I am providing right now.
                </p>
            </div>

            <div className="mx-auto mt-9 flex max-w-7xl flex-col items-center justify-between  md:flex-row">
                <div className="mx-4 my-5 max-w-md rounded-3xl bg-white p-12 shadow  transition duration-150 ease-out hover:shadow-lg hover:ease-in md:p-16">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        Light Session
                    </h5>
                    <div className="text-[54px] font-black text-root">$159</div>
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
                        <span className="ml-2 text-lg font-bold text-gray-600 ">
                            3 session / month
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
                        <span className="ml-2 text-lg font-bold text-gray-600 ">
                            Group psychotherapy
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
                        <span className="ml-2 text-lg font-bold text-gray-600 ">
                            Duration 30 minutes
                        </span>
                    </li>
                    <li className="my-3 list-none text-gray-700">
                        <span className=" text-gray-500">
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
                        <span className="ml-2 text-lg font-bold text-gray-500 ">
                            Personal meeting
                        </span>
                    </li>
                    <li className="my-3 list-none text-gray-700">
                        <span className=" text-gray-500">
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
                        <span className="ml-2 text-lg font-bold text-gray-500 ">
                            Support 24 hours
                        </span>
                    </li>
                    <button className="mx-auto mt-3 mb-3 w-full  rounded-full border border-root px-[40px] py-[14px] font-bold text-root hover:scale-105">
                        Buy now
                    </button>
                </div>
                <div className="mx-4 my-5 max-w-md rounded-3xl bg-white p-12 shadow  transition duration-150 ease-out hover:shadow-lg hover:ease-in md:p-16">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        Standard Session
                    </h5>
                    <div className="text-[54px] font-black text-root">$250</div>
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
                        <span className="ml-2 text-lg font-bold text-gray-600 ">
                            6 session / month
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
                        <span className="ml-2 text-lg font-bold text-gray-600 ">
                            Group psychotherapy
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
                        <span className="ml-2 text-lg font-bold text-gray-600 ">
                            Duration 30 minutes
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
                        <span className="ml-2 text-lg font-bold text-gray-600 ">
                            Personal meeting
                        </span>
                    </li>
                    <li className="my-3 list-none text-gray-700">
                        <span className=" text-gray-500">
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
                        <span className="ml-2 text-lg font-bold text-gray-500 ">
                            Support 24 hours
                        </span>
                    </li>
                    <button className="mx-auto mt-3 mb-3 w-full  rounded-full border border-root bg-root px-[40px] py-[14px] font-bold text-white hover:scale-105">
                        Buy now
                    </button>
                </div>
                <div className="mx-4 my-5 max-w-md rounded-3xl bg-white p-12 shadow  transition duration-150 ease-out hover:shadow-lg hover:ease-in md:p-16">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        Individual session
                    </h5>
                    <div className="text-[54px] font-black text-root">$400</div>
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
                        <span className="ml-2 text-lg font-bold text-gray-600 ">
                            3 session / month
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
                        <span className="ml-2 text-lg font-bold text-gray-600 ">
                            Group psychotherapy
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
                        <span className="ml-2 text-lg font-bold text-gray-600 ">
                            Duration 30 minutes
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
                        <span className="ml-2 text-lg font-bold text-gray-600 ">
                            Personal meeting
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
                        <span className="ml-2 text-lg font-bold text-gray-600 ">
                            Support 24 hours
                        </span>
                    </li>
                    <button className="mx-auto mt-3 mb-3 w-full  rounded-full border border-root px-[40px] py-[14px] font-bold text-root hover:scale-105">
                        Buy now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
