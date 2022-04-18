/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Contact() {
    return (
        <div className="pb-18 my-12 mx-5 flex items-center justify-center py-5">
            {' '}
            <form className="w-full max-w-lg">
                <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="w-full px-3 md:w-1/2">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-last-name"
                        >
                            First Name
                        </label>
                        <input
                            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="grid-last-name"
                            type="text"
                            placeholder="Doe"
                        />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-last-name"
                        >
                            Last Name
                        </label>
                        <input
                            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="grid-last-name"
                            type="text"
                            placeholder="Doe"
                        />
                    </div>
                </div>
                <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="w-full px-3">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-password"
                        >
                            E-mail
                        </label>
                        <input
                            className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="email"
                            type="email"
                        />
                        <p className="text-xs italic text-gray-600">
                            Some tips - as long as needed
                        </p>
                    </div>
                </div>
                <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="w-full px-3">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="grid-password"
                        >
                            Message
                        </label>
                        <textarea
                            className=" no-resize mb-3 block h-48 w-full resize-none appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="message"
                        />
                        <p className="text-xs italic text-gray-600">
                            Re-size can be disabled by set by resize-none / resize-y / resize-x /
                            resize
                        </p>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button
                            className="focus:shadow-outline rounded bg-root py-2 px-4 font-bold text-white shadow hover:bg-teal-400 focus:outline-none"
                            type="button"
                        >
                            Send
                        </button>
                    </div>
                    <div className="md:w-2/3" />
                </div>
            </form>
        </div>
    );
}

export default Contact;
