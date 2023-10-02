import React, { useState } from 'react'

const Registration = () => {
    const [logIn, setLogIn] = useState(true)

    const handleRegistion = () => {
        setLogIn(!logIn)
    }
    console.log(logIn);
    return (
        <div>


            {logIn ?(
            <div className="bg-gray-100 flex justify-center items-center h-screen">
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder" className="object-cover w-full h-full" />
                </div>
                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <h1 className="text-2xl font-semibold mb-4">Login</h1>
                    <form action="#" method="POST">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-600">Username</label>
                            <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">Password</label>
                            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                            <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
                        </div>
                        <div className="mb-6 text-blue-500">
                            <a href="@" className="hover:underline">Forgot Password?</a>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                    </form>
                    <div className="mt-6 text-blue-500 text-center">
                        <p className="hover:underline" onClick={handleRegistion}>Sign up Here</p>
                    </div>
                </div>
            </div>
            ):(
            <div className="bg-gray-100 flex justify-center items-center h-screen">
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder" className="object-cover w-full h-full" />
                </div>
                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <h1 className="text-2xl font-semibold mb-4">Sign up</h1>
                    <form action="#" method="POST">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-600">Username</label>
                            <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">Email</label>
                            <input type="text" id="email" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">Password</label>
                            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirm_password" className="block text-gray-600">confirm Password</label>
                            <input type="password" id="confirm_password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                        </div>

                        <button type="submit" className="bg-gray-700 hover:bg-gray-500 text-white font-semibold rounded-md py-2 px-4 w-full">Sign up</button>
                    </form>
                    <div className="mt-6 text-blue-500 text-center">
                        <p className="hover:underline" onClick={handleRegistion}>Log in Here</p>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Registration