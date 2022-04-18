import React from 'react';

function AboutMe() {
    return (
        <div className="container mx-auto my-6 flex items-center justify-center">
            <div className="flex flex-col md:flex-row">
                <div className="max-h-96 md:h-screen">
                    <img
                        className="h-full w-auto object-cover object-top"
                        src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                    />
                </div>
                <div className="flex bg-gray-100 p-10">
                    <div className="mb-auto mt-auto max-w-lg">
                        <h1 className="text-3xl uppercase">K. M. Rajib Faysal</h1>
                        <p className="mb-5 font-semibold">Web Developer</p>
                        <p>
                            My goal is to provide my client the best services he/she need. I will
                            never compromise my duty inshaAllah. I want to be a Web developer who
                            knows all the modern technology and can figure out unknown thing to do.
                            I will put my best to achieve my goal inshaAllah by working hard
                            everyday.
                        </p>
                        <button
                            type="button"
                            className="mt-6 rounded-md bg-root py-3 px-7 text-white"
                        >
                            Email Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
