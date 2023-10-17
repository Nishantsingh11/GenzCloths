import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleOrder = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [productData, setProductData] = React.useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8080/product/getproduct/${id}`)
            .then((res) => {
                setProductData(res.data)
                console.log("GET A ITEM BY ID", res.data);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(true)
            })
    }, [id])

    return (
        <div>
            {
                isLoading ? (
                    <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
                ) : (
                    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                        <div className="flex justify-start item-start space-y-2 flex-col ">
                            <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #13432</h1>
                            <p className="text-base font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
                        </div>
                        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                                <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                    <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                          
                                        <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                                <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                                                <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                                            </div>
                                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{productData.productName}</h3>
                                                    <div className="flex justify-start items-start flex-col space-y-2">
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-300">Style: </span> Italic Minimal Design
                                                        </p>
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-300">Size: </span> Small
                                                        </p>
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-300">Color: </span> Light Blue
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between space-x-8 items-start w-full">
                                                    <p className="text-base xl:text-lg leading-6">
                                                        {productData.productDiscountPrice} <span className="text-red-300 line-through"> ${productData.productPrice}</span>
                                                    </p>
                                                    <p className="text-base xl:text-lg leading-6 text-gray-800">{productData.quantity}</p>
                                                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">${productData.productPrice}</p>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                                <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                        <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                            <div className="flex justify-between  w-full">
                                                <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                                <p className="text-base leading-4 text-gray-600">$56.00</p>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <p className="text-base leading-4 text-gray-800">
                                                    Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">STUDENT</span>
                                                </p>
                                                <p className="text-base leading-4 text-gray-600">-$28.00 (50%)</p>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <p className="text-base leading-4 text-gray-800">Shipping</p>
                                                <p className="text-base leading-4 text-gray-600">$0</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                            <p className="text-base font-semibold leading-4 text-gray-600">{}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                        <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                                        <div className="flex justify-between items-start w-full">
                                            <div className="flex justify-center items-center space-x-4">
                                                <div className="w-8 h-8">
                                                    <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                                </div>
                                                <div className="flex flex-col justify-start items-center">
                                                    <p className="text-lg leading-6 font-semibold text-gray-800">
                                                        DPD Delivery
                                                        <br />
                                                        <span className="font-normal">Delivery with 24 Hours</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-lg font-semibold leading-6 text-gray-800">$8.00</p>
                                        </div>
                                        <div className="w-full flex justify-center items-center">
                                            <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SingleOrder