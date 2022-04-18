import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="error-container">
                <img
                    src="https://raw.githubusercontent.com/babulakterfsd/imgsrc/main/404.png"
                    alt="404"
                    className="img-fluid notfoundimg"
                />
                <h1 className="text-danger m-0">404! Page Not Found !!</h1>
                <Link to="/">
                    <button
                        type="button"
                        className="btn-light-green fw-semi-bold mb-5 mt-3 p-3 text-white"
                    >
                        Go Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
