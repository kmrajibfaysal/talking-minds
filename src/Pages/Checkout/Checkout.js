/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */

function CheckOut() {
    return (
        <section className="min-h-screen bg-gray-100 p-4 text-gray-600 antialiased">
            <div className="h-full">
                <div>
                    <div className="relative mx-auto max-w-lg px-4 pt-4 pb-8 sm:px-6 lg:px-8">
                        <div className="rounded bg-white px-8 pt-6 pb-6 shadow-lg">
                            <div className="mb-6 text-center">
                                <h1 className="mb-2 text-xl font-semibold leading-snug text-gray-800">
                                    Your personal Treatment
                                </h1>
                                <div className="text-sm">
                                    A beginning you your upmost valuable personal treatment and
                                    consultent with me.
                                </div>
                            </div>

                            <div className="mb-6 flex justify-center">
                                <div className="relative flex w-full rounded bg-gray-50 p-1">
                                    <span
                                        className="pointer-events-none absolute inset-0 m-1"
                                        aria-hidden="true"
                                    >
                                        <span className="absolute inset-0 w-1/2 transform rounded border border-gray-200 bg-white shadow-sm transition duration-150 ease-in-out" />
                                    </span>
                                    <button className="relative flex-1 p-1 text-sm font-medium transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2">
                                        Pay With Card
                                    </button>
                                    <button className="relative flex-1 p-1 text-sm font-medium transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2">
                                        Pay With PayPal
                                    </button>
                                </div>
                            </div>
                            <div x-show="card">
                                <div className="space-y-4">
                                    <div>
                                        <label
                                            className="mb-1 block text-sm font-medium"
                                            htmlFor="card-nr"
                                        >
                                            Card Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="card-nr"
                                            className="w-full rounded border border-gray-200 bg-white py-2 px-3 text-sm leading-5 text-gray-800 placeholder-gray-400 shadow-sm hover:border-gray-300 focus:border-indigo-300 focus:ring-0"
                                            type="text"
                                            placeholder="1234 1234 1234 1234"
                                        />
                                    </div>

                                    <div className="flex space-x-4">
                                        <div className="flex-1">
                                            <label
                                                className="mb-1 block text-sm font-medium"
                                                htmlFor="card-expiry"
                                            >
                                                Expiry Date <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="card-expiry"
                                                className="w-full rounded border border-gray-200 bg-white py-2 px-3 text-sm leading-5 text-gray-800 placeholder-gray-400 shadow-sm hover:border-gray-300 focus:border-indigo-300 focus:ring-0"
                                                type="text"
                                                placeholder="MM/YY"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label
                                                className="mb-1 block text-sm font-medium"
                                                htmlFor="card-cvc"
                                            >
                                                CVC <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="card-cvc"
                                                className="w-full rounded border border-gray-200 bg-white py-2 px-3 text-sm leading-5 text-gray-800 placeholder-gray-400 shadow-sm hover:border-gray-300 focus:border-indigo-300 focus:ring-0"
                                                type="text"
                                                placeholder="CVC"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            className="mb-1 block text-sm font-medium"
                                            htmlFor="card-name"
                                        >
                                            Name on Card <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="card-name"
                                            className="w-full rounded border border-gray-200 bg-white py-2 px-3 text-sm leading-5 text-gray-800 placeholder-gray-400 shadow-sm hover:border-gray-300 focus:border-indigo-300 focus:ring-0"
                                            type="text"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="mb-1 block text-sm font-medium"
                                            htmlFor="card-email"
                                        >
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="card-email"
                                            className="w-full rounded border border-gray-200 bg-white py-2 px-3 text-sm leading-5 text-gray-800 placeholder-gray-400 shadow-sm hover:border-gray-300 focus:border-indigo-300 focus:ring-0"
                                            type="email"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <div className="mb-4">
                                        <button className="inline-flex w-full items-center justify-center rounded border border-transparent bg-indigo-500 px-3 py-2 text-sm font-medium leading-5 text-white shadow-sm transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus-visible:ring-2">
                                            Pay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CheckOut;
