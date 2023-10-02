import React from 'react'

const WishList = () => {
    //    const handleClick1 = (flag) => {
    //       let icon = document.getElementById("chevronDown1");
    //       let icon2 = document.getElementById("chevronUp1");
    //       let menu = document.getElementById("menu1");
    //       if (flag) {
    //         menu.classList.toggle("hidden");
    //         icon.classList.toggle("hidden");
    //         icon2.classList.toggle("hidden");
    //       }
    //     };

    //   const  handleClick2 = (flag) => {
    //       let icon = document.getElementById("chevronDown2");
    //       let icon2 = document.getElementById("chevronUp2");
    //       let menu = document.getElementById("menu2");
    //       if (flag) {
    //         menu.classList.toggle("hidden");
    //         icon.classList.toggle("hidden");
    //         icon2.classList.toggle("hidden");
    //       }
    //     };

    //    const handleClick3 = (flag) => {
    //       let icon = document.getElementById("chevronDown3");
    //       let icon2 = document.getElementById("chevronUp3");
    //       let menu = document.getElementById("menu3");
    //       if (flag) {
    //         menu.classList.toggle("hidden");
    //         icon.classList.toggle("hidden");
    //         icon2.classList.toggle("hidden");
    //       }
    //     };
    return (

        <div>
            {/* <!-- component --> */}
            <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
                {/* <!-- - more free and premium Tailwind CSS components at https://tailwinduikit.com/ - --> */}
                <div className="flex flex-col jusitfy-start items-start">
                    <div>
                        <p className="text-sm leading-4 text-gray-600 ">Home</p>
                    </div>
                    <div className="mt-3">
                        <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 ">Favourites</h1>
                    </div>
                    <div className="mt-4">
                        <p className="text-2xl tracking-tight leading-6 text-gray-600">03 items</p>
                    </div>
                    <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
                        <div className="flex flex-col">
                            <div className="relative">
                                <img className="hidden lg:block" src="https://i.ibb.co/SsmkhPq/Rectangle-23.png" alt="bag" />
                                <img className="hidden sm:block lg:hidden" src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png" alt="bag" />
                                <img className="sm:hidden" src="https://i.ibb.co/cyN26yn/Rectangle-23.png" alt="bag" />
                                <button aria-label="close" className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800">
                                    <svg className="fil-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L1 13" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1 1L13 13" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 ">New York Streak</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button aria-label="show menu"

                                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 ">
                                        <svg id="chevronUp1" className="fill-stroke" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L5 1L1 5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg id="chevronDown1" className="hidden fill-stroke" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div id="menu1" className="flex flex-col jusitfy-start items-start mt-12">
                                <div>
                                    <p className="tracking-tight text-xs leading-3 text-gray-800">MK617</p>
                                </div>
                                <div className="mt-2">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">Beige brown</p>
                                </div>
                                <div className="mt-6">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">42 size</p>
                                </div>
                                <div className="mt-6">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800 ">$1,000</p>
                                </div>
                                <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                    <div className="w-full">
                                        <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 ">

                                            More information</button>

                                    </div>
                                    <div className="w-full">
                                        <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-black bg-gray-800 border border-gray-800 ">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="relative">
                                <img className="hidden lg:block" src="https://i.ibb.co/SsmkhPq/Rectangle-23.png" alt="bag" />
                                <img className="hidden sm:block lg:hidden" src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png" alt="bag" />
                                <img className="sm:hidden" src="https://i.ibb.co/cyN26yn/Rectangle-23.png" alt="bag" />
                                <button aria-label="close" className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800">
                                    <svg className="fil-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L1 13" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1 1L13 13" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 ">New York Streak</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button aria-label="show menu"

                                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 ">
                                        <svg id="chevronUp1" className="fill-stroke" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L5 1L1 5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg id="chevronDown1" className="hidden fill-stroke" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div id="menu1" className="flex flex-col jusitfy-start items-start mt-12">
                                <div>
                                    <p className="tracking-tight text-xs leading-3 text-gray-800">MK617</p>
                                </div>
                                <div className="mt-2">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">Beige brown</p>
                                </div>
                                <div className="mt-6">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">42 size</p>
                                </div>
                                <div className="mt-6">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800 ">$1,000</p>
                                </div>
                                <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                    <div className="w-full">
                                        <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 ">

                                            More information</button>

                                    </div>
                                    <div className="w-full">
                                        <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-black bg-gray-800 border border-gray-800 ">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="relative">
                                <img className="hidden lg:block" src="https://i.ibb.co/SsmkhPq/Rectangle-23.png" alt="bag" />
                                <img className="hidden sm:block lg:hidden" src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png" alt="bag" />
                                <img className="sm:hidden" src="https://i.ibb.co/cyN26yn/Rectangle-23.png" alt="bag" />
                                <button aria-label="close" className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800">
                                    <svg className="fil-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L1 13" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1 1L13 13" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 ">New York Streak</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button aria-label="show menu"

                                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 ">
                                        <svg id="chevronUp1" className="fill-stroke" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L5 1L1 5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg id="chevronDown1" className="hidden fill-stroke" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div id="menu1" className="flex flex-col jusitfy-start items-start mt-12">
                                <div>
                                    <p className="tracking-tight text-xs leading-3 text-gray-800">MK617</p>
                                </div>
                                <div className="mt-2">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">Beige brown</p>
                                </div>
                                <div className="mt-6">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">42 size</p>
                                </div>
                                <div className="mt-6">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800 ">$1,000</p>
                                </div>
                                <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                    <div className="w-full">
                                        <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 ">

                                            More information</button>

                                    </div>
                                    <div className="w-full">
                                        <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-black bg-gray-800 border border-gray-800 ">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WishList