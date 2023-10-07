import React, { useState } from 'react'
import { categories } from '../Category/Category';
import axios from "axios"
import { useNavigate } from "react-router-dom";

const FormForSeller = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false)
    const [isSubToggle, setIsSubToggle] = useState(false)
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [basicData, setBasicData] = useState({
        productName: '',
        productDescription: '',
        productMainCategory: '',
        productSubCategory: '',
        productPrice: '',
        productQuantity: '',
        productSize: '',
        productColor: '',
        productBrand: '',
        productMaterials: '',
        productDiscount: '',
        productDiscountPrice: '',
        productTags: '',
    })



    const getBasicData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBasicData({ ...basicData, [name]: value })
    }
    console.log(basicData);


    const handleToggle = () => {
        setIsToggle(!isToggle)
    }
    const handleSubToggle = () => {
        setIsSubToggle(!isSubToggle)
    }
    const getCategoryfromForm = (category) => {
        setSelectedMainCategory(category);
        setBasicData({ ...basicData, productMainCategory: selectedMainCategory })

    }


    // Function to get subcategories for the selected main category
    const findSubcategories = (categoryName) => {
        const category = categories.find((category) => category.name === categoryName);
        const storesubCategory = category ? category.subcategories : [];
        return storesubCategory
    };


    const subcategories = findSubcategories(selectedMainCategory);



    const handlesubformdata = (subcategorie) => {
        setSelectedSubCategory(subcategorie)
        setBasicData({ ...basicData, productSubCategory: selectedSubCategory })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();


       await axios.post("http://localhost:8080/product/createproduct", basicData)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        console.log("hello");
        console.log(basicData);
        setBasicData({
            productName: '',
            productPrice: '',
            productQuantity: '',
            productSize: '',
            productDescription: '',
            productColor: '',
            productBrand: '',
            productMaterials: '',
            productDiscount: '',
            productDiscountPrice: '',
            productTags: '',
            productMainCategory: '',
            productSubCategory: '',
        })
        setSelectedMainCategory(null);
        setSelectedSubCategory(null);
        navigate("/seller/youritem")
    }
    return (
        <>
            <section className=" py-1 bg-blueGray-50">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">
                                    Add item</h6>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleSubmit}>
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Product info
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Product Name
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="lucky.jesse"
                                                value={basicData.productName}
                                                name='productName'
                                                onChange={getBasicData}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Product Price
                                            </label>
                                            <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring
                                         w-full ease-linear transition-all duration-150" placeholder='jesse@example.com'
                                                name='productPrice'
                                                onChange={getBasicData}
                                                value={basicData.productPrice}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Product Quantity
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='10'
                                                name='productQuantity'
                                                onChange={getBasicData}
                                                value={basicData.productQuantity}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Product Size
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='s,m,xl,l,2xl'
                                                name="productSize"
                                                value={basicData.productSize}
                                                onChange={getBasicData} />
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
                                            <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" placeholder='write a Description about the product'
                                                name="productDescription"
                                                value={basicData.productDescription}
                                                onChange={getBasicData}

                                            ></textarea>
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
                                                            <p className="px-4 appearance-none outline-none text-gray-800 w-full" value={basicData.productMainCategory}>
                                                                {selectedMainCategory ? selectedMainCategory : "Select Category"}
                                                            </p>
                                                        </div>
                                                        <input type="checkbox" name="show_more" id="show_more" className="hidden peer" />
                                                        {isToggle &&
                                                            <>
                                                                {categories.map((item, index) => {
                                                                    return <div className="cursor-pointer group" key={index}>
                                                                        <div>
                                                                            <button
                                                                                className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100"
                                                                                name="productMainCategory"
                                                                                value={basicData.productMainCategory}
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
                                                            selectedSubCategory ? selectedSubCategory : "Select Sub Category"}
                                                            <input name="select" id="select" className="px-4 appearance-none outline-none text-gray-800 w-full" />
                                                        </div>
                                                        <input type="checkbox" name="show_more" id="show_more" className="hidden peer" />
                                                        {
                                                            isSubToggle &&
                                                            <div className="">
                                                                {subcategories.map((item, index) => {
                                                                    return <div className="cursor-pointer group tx" key={index}>
                                                                        <button
                                                                            type="button"
                                                                            className="block p-2 border-transparent 
                                                                    
                                                                    border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100"
                                                                            name="productSubCategory"
                                                                            // value={basicData.productSubCategory}
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
                                    <div className="w-full lg:w-4/12 px-4 mt-5">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Product Color
                                            </label>
                                            <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Red,Blue,Green'
                                                name="productColor"
                                                value={basicData.productColor}
                                                onChange={getBasicData} />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 mt-5">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Product Brand
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='H&M'
                                                name='productBrand'
                                                value={basicData.productBrand}
                                                onChange={getBasicData} />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 mt-5">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Product Materials                                        </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Cotten'
                                                name="productMaterials"
                                                value={basicData.productMaterials}
                                                onChange={getBasicData} />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 mt-5">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                productDiscount
                                            </label>
                                            <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='5%'
                                                name="productDiscount"
                                                value={basicData.productDiscount}
                                                onChange={getBasicData} />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 mt-5">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Product Discount Price
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='95'
                                                name="productDiscountPrice"
                                                value={basicData.productDiscountPrice}
                                                onChange={getBasicData}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 mt-5">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Product Tags                                        </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Skirt,woman,lady'
                                                name="productTags"
                                                value={basicData.productTags}
                                                onChange={getBasicData} />
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className='text-center'>

                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 mx-auto rounded-full" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                    <footer className="relative  pt-8 pb-6 mt-2">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                                        Thank you for being with us
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

