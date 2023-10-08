import React, { useState } from 'react'
import states from "./State"
import countries from './Countries'
import DatePicker from 'react-datepicker'
import "/node_modules/react-datepicker/dist/react-datepicker.css"
import axios from 'axios'
const Accounts = () => {
    const [isEditable, setIsEditable] = useState(true)
    const [isStateOpen, setIsStateOpen] = useState(false)
    const [isGenderOpen, setIsGenderOpen] = useState(false)
    const [isCountryOpen, setIsCountryOpen] = useState(false)
    const [date, setDate] = useState(new Date());
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        phoneNumber: '',
        street: '',
        state: '',
        country: '',
        pincode: ''

    })
    const toggleEdit = () => {
        setIsEditable(!isEditable)
    }
    const getFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleStateOpen = () => {
        setIsStateOpen(!isStateOpen)
    }
    const handleGenderOpen = () => {
        setIsGenderOpen(!isGenderOpen)
    }
    const handleCountryOpen = () => {
        setIsCountryOpen(!isCountryOpen)
    }
    const handleStateData = (state) => {
        setFormData({ ...formData, state: state })
        setIsStateOpen(!isStateOpen)

    }
    const handleCountryData = (country) => {
        setFormData({ ...formData, country: country })
        setIsCountryOpen(!isCountryOpen)
    }
    const handleGenderData = (gender) => {
        setFormData({ ...formData, gender: gender })
        setIsGenderOpen(!isGenderOpen)

    }
    const handleDateChange = (selectedDate) => {
        const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
        setFormData({ ...formData, dateOfBirth: formattedDate });
        setDate(selectedDate);
    };

    const token = localStorage.getItem("token");
    console.log(token);
    const config = {
        headers: {
            'Authorization': `${localStorage.getItem("token")}`, // Include the token in the 'Authorization' header
        },
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put("http://localhost:8080/user/updateprofile", formData, config)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })

    }
    console.log(formData);
    return (

        <div>
            <div className="bg-gray-100">
                <div className="container mx-auto my-5 p-5">
                    <div className="md:flex no-wrap md:-mx-2 ">
                        {/* <!-- Left Side --> */}
                        <div className="w-full md:w-3/12 md:mx-2">
                            {/* <!-- Profile Card --> */}
                            <div className="bg-white p-3 border-t-4 border-green-400">
                                <div className="image overflow-hidden">
                                    <img className="h-auto w-full mx-auto"
                                        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                        alt="" />
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Jane Doe</h1>
                                <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                                <ul
                                    className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Status</span>
                                        <span className="ml-auto"><span
                                            className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>Member since</span>
                                        <span className="ml-auto">Nov 07, 2016</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-4"></div>
                        </div>
                        <div className="w-full md:w-9/12 mx-2 h-64">
                            <div className="bg-white p-3 shadow-sm rounded-sm">

                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">About</span>
                                </div>

                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">First Name</div>
                                            {isEditable ? (
                                                <input type="text" className='px-4 py-2' name='firstName' onChange={getFormData} placeholder='Jana' />
                                            ) : (
                                                <div className="px-4 py-2">jana</div>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-2">

                                            <div className="px-4 py-2 font-semibold">Last Name</div>
                                            {isEditable ? (
                                                <input type="text" className='px-4 py-2' name='lastName' onChange={getFormData} placeholder='Loada' />
                                            ) : (
                                                <div className="px-4 py-2">loada</div>
                                            )}

                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Gender</div>
                                            {isEditable ? (
                                                <div className="relative inline-block text-left">
                                                    <div>
                                                        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleGenderOpen}>
                                                            {formData.gender ? formData.gender : "Select Gender"}
                                                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    {isGenderOpen && (


                                                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                                            <div className="py-1" role="none">
                                                                <button className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0" onClick={() => handleGenderData("Male")}>Male</button>
                                                                <button className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1" onClick={() => handleGenderData("Female")}>Female</button>
                                                                <button className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2" onClick={() => handleGenderData("Other")}>Other</button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="px-4 py-2 font-bold text-center">{formData.gender ? formData.gender : "Select Gender"}</div>

                                            )}
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Contact No.</div>
                                            {isEditable ? (
                                                <input type="text" className='px-4 py-2' name='phoneNumber' onChange={getFormData} />
                                            ) : (
                                                <div className="px-4 py-2">+11 998001001</div>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Street</div>
                                            {isEditable ? (
                                                <input type="text" className='px-4 py-2' name="street" onChange={getFormData} />
                                            ) : (
                                                <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-2">

                                            <div className="px-4 py-2 font-semibold">Pincode </div>
                                            {isEditable ? (
                                                <input type="text" className='px-4 py-2' name='pincode' onChange={getFormData} />
                                            ) : (
                                                <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Contries</div>
                                            {isEditable ? (
                                                <div className="relative inline-block text-left">

                                                    <div>
                                                        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleCountryOpen}>
                                                            {formData.country ? formData.country : 'Select Country'}
                                                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    {isCountryOpen && (
                                                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                                            <div className="py-1" role="none">
                                                                {countries.map((country, index) => (
                                                                    <button
                                                                        key={index}
                                                                        className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0" onClick={() => handleCountryData(country.name)} name='country'>{country.name}({country.code})</button>
                                                                ))}                                                        </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="px-4 py-2 text-center font-bold">{formData.country ? formData.country : "Select Contries"}</div>

                                            )}


                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">State</div>
                                            {isEditable ? (
                                                <div className="relative inline-block text-left">
                                                    <div>
                                                        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleStateOpen}>
                                                            {formData.state ? formData.state : 'Select State'}
                                                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    {isStateOpen && (
                                                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                                            <div className="py-1" role="none">
                                                                {states.map((state, index) => (
                                                                    <button key={index} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0"
                                                                        onClick={() => handleStateData(state.name)}
                                                                        name='state'>{state.name}({state.abbreviation})</button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                            ) : (
                                                <div className="px-4 py-2 text-center font-bold">{formData.state ? formData.state : "Select State"}</div>

                                            )}


                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Email.</div>
                                            {isEditable ? (
                                                <input type="text" className='px-4 py-2' />

                                            ) : (
                                                <div className="px-4 py-2">
                                                    <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                                </div>
                                            )

                                            }


                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Birthday</div>
                                            {
                                                isEditable ? (
                                                    <DatePicker selected={date} onChange={handleDateChange} />
                                                ) : (
                                                    <div className="px-4 py-2">{formData.dateOfBirth ? formData.dateOfBirth : "Select Data"}</div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>

                                    {isEditable ? (
                                        <button
                                            type='submit'
                                            className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4" onClick={toggleEdit}>Save Changes</button>
                                    ) : (


                                        <button
                                            className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4" onClick={toggleEdit}>Edit Profile</button>
                                    )}
                                </form>
                            </div>

                            {/* <!-- End of about section --> */}

                            <div className="my-4"></div>

                            <div className="bg-white p-3 shadow-sm rounded-sm">

                                <div className="grid grid-cols-2">
                                    <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">Experience</span>
                                        </div>
                                        <ul className="list-inside space-y-2">
                                            <li>
                                                <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path fill="#fff"
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">Education</span>
                                        </div>
                                        <ul className="list-inside space-y-2">
                                            <li>
                                                <div className="text-teal-600">Masters Degree in Oxford</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div className="text-teal-600">Bachelors Degreen in LPU</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- End of Experience and education grid --> */}
                            </div>
                            {/* <!-- End of profile tab --> */}

                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Accounts