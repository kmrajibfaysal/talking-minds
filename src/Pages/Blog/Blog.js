import React from 'react';

function Blog() {
    return (
        <div className="container mx-auto flex w-full flex-col flex-wrap items-center justify-center pb-20 md:flex-row">
            <div className="mx-4 my-5 max-w-md rounded-3xl bg-white p-12 shadow  transition duration-150 ease-out hover:shadow-lg hover:ease-in md:p-16">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 ">
                    Authorization vs authentication
                </h5>
                <p className="text-md">
                    Authorization is the way of checking ability to do certain task for a particular
                    user and authentication is to identify who the user is or what is his role in
                    this segment. Authorization is not visible or changeable by user and
                    authentication can be partially changed by user and is visible.
                </p>
            </div>
            <div className="mx-4 my-5 max-w-md rounded-3xl bg-white p-12 shadow  transition duration-150 ease-out hover:shadow-lg hover:ease-in md:p-16">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 ">
                    Why I am using firebase?
                </h5>
                <p className="text-md">
                    Firebase is an all in one solution for developer. It provides all necessary
                    behind the seen function for a developer which can be used to make a small to
                    mid level app quite fast. Due to its availability and easy to use system I used
                    it in my projects.
                </p>
            </div>
            <div className="mx-4 my-5 max-w-md rounded-3xl bg-white p-12 shadow  transition duration-150 ease-out hover:shadow-lg hover:ease-in md:p-16">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 ">
                    Other services by firebase rather than authentication:
                </h5>
                <p className="text-md">
                    Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics,
                    Predictions, Cloud Messaging etc.
                </p>
            </div>
        </div>
    );
}

export default Blog;
