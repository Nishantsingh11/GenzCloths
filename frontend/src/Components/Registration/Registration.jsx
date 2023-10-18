import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
const Registration = () => {
    const navigate = useNavigate()
    const [singupData, setSingupData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [loginData, setLoginData] = useState({
        usernameoremail: "",
        password: "",
    })
    const [logIn, setLogIn] = useState(true)

    const getDataForSignup = (e) => {
        setSingupData({ ...singupData, [e.target.name]: e.target.value })
    }
    const getDataForLogin = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const handleSignupsumbit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/user/register", singupData)
            .then(res => {
                console.log(res);
                setLogIn(!logIn)
                toast.success("Registration Success")
            })
            .catch(err => {
                console.log(err);
                toast.error("Something went wrong")
            })
        console.log(singupData);
    }
    const handleLoginSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8080/user/login", loginData)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token)
                toast.success("Login Success")
                navigate('/')
            }
            )   
            .catch(err => {
                console.log(err);
                toast.error("Something went wrong")
            }
            )
        console.log(loginData);
        // navigate('/dashboard')
    }

    const handleRegistion = () => {
        setLogIn(!logIn)
    }
    console.log(logIn);
    console.log(singupData);
    console.log(loginData);
    return (
        <div>


            {logIn ? (
                <div className="bg-gray-100 flex justify-center items-center h-screen">
                    <div className="w-1/2 h-screen hidden lg:block">
                        <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder" className="object-cover w-full h-full" />
                    </div>
                    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                        <h1 className="text-2xl font-semibold mb-4">Login</h1>
                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-600">Username</label>
                                <input type="text" id="username" name="usernameoremail" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"
                                onChange={getDataForLogin} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-600">Password</label>
                                <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"
                                onChange={getDataForLogin} />
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
            ) : (
                <div className="bg-gray-100 flex justify-center items-center h-screen">
                    <div className="w-1/2 h-screen hidden lg:block">
                        <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder" className="object-cover w-full h-full" />
                    </div>
                    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                        <h1 className="text-2xl font-semibold mb-4">Sign up</h1>
                        <form onSubmit={handleSignupsumbit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-600">Username</label>
                                <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"

                                    onChange={getDataForSignup} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600">Email</label>
                                <input type="text" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"
                                    onChange={getDataForSignup} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-600">Password</label>
                                <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" onChange={getDataForSignup} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirm_password" className="block text-gray-600">confirm Password</label>
                                <input type="password" id="confirm_password" name="confirmPassword" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"
                                    onChange={getDataForSignup} />
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