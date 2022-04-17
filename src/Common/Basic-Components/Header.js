/* eslint-disable jsx-a11y/anchor-is-valid */
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/Logo.png';
import auth from '../../firebase.init';
import './Header.css';

function Header() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth);
    };

    const loginBtn = (
        <button
            onClick={() => navigate('/login')}
            type="button"
            className="mr-3 rounded-lg bg-root px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-root hover:bg-btn  focus:outline-none md:mr-0"
        >
            Login
        </button>
    );
    const logOutBtn = (
        <button
            onClick={handleSignOut}
            type="button"
            className="mr-3 rounded-lg bg-root px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-root hover:bg-btn  focus:outline-none md:mr-0"
        >
            Sign Out
        </button>
    );

    return (
        <nav className="sticky top-0 rounded border-gray-200 bg-white px-2 py-4 shadow-sm dark:bg-gray-800 sm:py-2.5">
            <div className="container mx-auto flex flex-wrap items-center justify-between transition duration-300 ease-in-out">
                <Link to="/" className="flex items-center">
                    <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Talking Minds Logo" />
                    <span className="self-center whitespace-nowrap text-[26px] font-bold text-root dark:text-white">
                        Talking Minds
                    </span>
                </Link>
                <div className="flex md:order-2">
                    {user ? logOutBtn : loginBtn}
                    <button
                        data-collapse-toggle="mobile-menu-4"
                        type="button"
                        className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                        aria-controls="mobile-menu-4"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <svg
                            className="hidden h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                    id="mobile-menu-4"
                >
                    <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                        <li>
                            <Link
                                to="/home"
                                className="block rounded py-2 pr-4 pl-3  font-bold text-gray-700    hover:text-link md:p-0"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="block rounded py-2 pr-4 pl-3 font-bold text-gray-700  hover:text-link md:p-0"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className="block rounded py-2 pr-4 pl-3 font-bold text-gray-700  hover:text-link md:p-0"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="block rounded py-2 pr-4 pl-3 font-bold text-gray-700  hover:text-link md:p-0"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
