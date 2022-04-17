import React from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from '../../Assets/LogoWhite.png';

function Footer() {
    return (
        <footer className=" bg-root p-4 text-white shadow dark:bg-gray-800 md:px-6 md:py-8">
            <div className="container mx-auto sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com" className="mb-4 flex items-center sm:mb-0">
                    <img src={LogoWhite} alt="" />

                    <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold dark:text-white">
                        Talking Minds
                    </span>
                </a>
                <ul className="mb-6 flex flex-wrap items-center text-sm text-white dark:text-gray-400 sm:mb-0">
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                            Licensing
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="container my-6 mx-auto border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-white dark:text-gray-400 sm:text-center">
                © 2022{' '}
                <Link to="/" className="hover:underline">
                    Talking Minds™
                </Link>
                . All Rights Reserved.
            </span>
        </footer>
    );
}

export default Footer;
