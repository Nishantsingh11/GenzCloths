import React, { useState } from 'react'
import { categories } from '../Category/Category';

const FormForSeller = () => {
    const [isToggle, setIsToggle] = useState(false)
    const [isSubToggle, setIsSubToggle] = useState(false)
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const handleToggle = () => {
        setIsToggle(!isToggle)
    }
    const handleSubToggle = () => {
        setIsSubToggle(!isSubToggle)
    }
    const getCategoryfromForm = (category) => {
        setSelectedMainCategory(category);
    }
    

    // Function to get subcategories for the selected main category
    const findSubcategories = (categoryName) => {
        const category = categories.find((category) => category.name === categoryName);
        const storesubCategory = category ? category.subcategories : [];
        return storesubCategory
    };
    

    // Example usage:
    //   const categoryName = "Men's Clothing";
    const subcategories = findSubcategories(selectedMainCategory);
    console.log(subcategories);
    const handlesubformdata = (subcategorie) =>{
        setSelectedSubCategory(subcategorie)
    }

    return (
        <>        <section className=" py-1 bg-blueGray-50">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Add item                                </h6>

                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Product info
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Product Name
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="lucky.jesse" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Product Price
                                        </label>
                                        <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='jesse@example.com' />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Product Quantity
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='10' />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Product Size
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='s,m,xl,l,2xl' />
                                    </div>
                                </div>
                            </div>


                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Product Description                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            About Product
                                        </label>
                                        <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" placeholder='write a Description about the product'></textarea>
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                More Product Info
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3 flex justify-around ">
                                        <div className=" bg-gray-100">
                                            <div className="max-w-md text-center mx-auto" onClick={handleToggle}>
                                                <label htmlFor="select" className="font-semibold block py-2">Select Category</label>

                                                <div className="relative">
                                                    <div className="h-10 bg-white text-center border border-gray-200 rounded items-center">
                                                        <p className="px-4 appearance-none outline-none text-gray-800 w-full">
                                                            {selectedMainCategory ? selectedMainCategory :"Select Category" }
                                                        </p>

                                                        
                                                    </div>
                                                    <input type="checkbox" name="show_more" id="show_more" className="hidden peer" />
                                                    {isToggle &&
                                                        <>
                                                           {categories.map((item, index) => {
                                                                        return    <div className="cursor-pointer group">
                                                                <div>
                                                                 
                                                                         <button
                                                                            className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100" key={index}
                                                                             
                                                                            onClick={() => getCategoryfromForm(item.name)} >{item.name}  </button>
                                                                </div>
                                                            </div>
                                                                    })}
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" bg-gray-100">
                                            <div className="max-w-md mx-auto text-center" onClick={handleSubToggle} >
                                                <label htmlFor="select" className="font-semibold block py-2">
                                           
                                                  Select Sub Category
                                                    </label>
                                                <div className="relative">
                                                    <div className="h-10 bg-white text-center  border border-gray-200 rounded items-center"> { 
                                                    selectedSubCategory ? selectedSubCategory : "Select Sub Category" }
                                                        <input name="select" id="select" className="px-4 appearance-none outline-none text-gray-800 w-full" />

                                                     
                                                    </div>

                                                    <input type="checkbox" name="show_more" id="show_more" className="hidden peer" />
                                                    {
                                                        isSubToggle  &&
                                                        <div className="">
                                                            {subcategories.map((item, index) => {
                                                                return <div className="cursor-pointer group tx" key={index}>
                                                                    <button
                                                                        type="button"
                                                                        className="block p-2 border-transparent 
                                                                    
                                                                    border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100"
                                                                    onClick={() => handlesubformdata(item)}
                                                                    >{item} </button>
                                                                </div>
                                                            })}
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            City
                                        </label>
                                        <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Country
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Postal Code
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                About Me
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            About me
                                        </label>
                                        <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <footer className="relative  pt-8 pb-6 mt-2">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                <div className="text-sm text-blueGray-500 font-semibold py-1">
                                    Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" >Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" > Creative Tim</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div >
        </section >
        </>


    )
}

export default FormForSeller

