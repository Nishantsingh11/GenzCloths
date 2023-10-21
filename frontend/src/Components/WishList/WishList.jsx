import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'


const WishList = () => {
    const [wishListData, setWishListData] = useState()
    const [isLoading, setIsLoading] = useState(true)


    const config = useMemo(() => ({
        headers: {
            'Authorization': `${localStorage.getItem("token")}`,
        },
    }), []);




    useEffect(() => {

        axios.get("http://localhost:8080/wishlist/getwishlist", config)
            .then((res) => {
                setWishListData(res.data.wishlist)
                console.log(res.data.wishlist);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [config])
    const handleRemove = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8080/wishlist/removewishlist/${id}`, config)
            .then((res) => {
                console.log(res);
                toast.success("Item Remove")
                setIsLoading(true)
            })
            .catch((err) => {
                console.log(err);
                toast.error("someting went wrong")
                isLoading(false)
            })
    }
    return (
        <div>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>

            ) : (
                <div>
                { wishListData?.items.length === 0 ? (
                <>
                    <div className='text-center text-2xl font-bold items-center'>
                    
                    <h1>Nothing to show here</h1>
                    </div>
                    <div className='text-center mt-10'>

                    <Link to ="/">
                    <button className='p-4 bg-gray-800 text-white font-bold hover:bg-gray-700 rounded-lg'>
                        Contine shopping
                    </button>
                    </Link>
                    </div>
                    </>
                 
                ):(


                <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
                    <div className="flex flex-col jusitfy-start items-start">
                        <div>
                            <p className="text-sm leading-4 text-gray-600 ">Home</p>
                        </div>
                        <div className="mt-3">
                            <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 ">Favourites</h1>
                        </div>
                        <div className="mt-4">
                            <p className="text-2xl tracking-tight leading-6 text-gray-600">{wishListData?.items.length}Item</p>
                        </div>
                        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">



                            {wishListData.items.map((item, index) => (

                                <div className="flex flex-col" key={index}>
                                    <div className="relative">
                                        <img className=" lg:block" src="https://i.ibb.co/SsmkhPq/Rectangle-23.png" alt="bag" />
                                        <img className="hidden sm:block lg:hidden" src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png" alt="bag" />
                                        <img className="sm:hidden" src="https://i.ibb.co/cyN26yn/Rectangle-23.png" alt="bag" />
                                        <button aria-label="close" className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-800 absolute p-1.5 "
                                            onClick={() => handleRemove(item.productId._id)}
                                        >
                                            <svg className="fil-current" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 1L1 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1 1L13 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-6 flex justify-between items-center">
                                        <div className="flex justify-center items-center">
                                            <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 ">{item.productId.productName}</p>
                                        </div>
                                        <div className="flex justify-center items-center">

                                        </div>
                                    </div>
                                    <div id="menu1" className="flex flex-col jusitfy-start items-start mt-12">
                                        <div>
                                            <p className="tracking-tight text-xs leading-3 text-gray-800">{item.productId.productBrand}</p>
                                        </div>
                                        <div className="mt-2">
                                            <p className="tracking-tight text-base font-medium leading-4 text-gray-800">Beige brown</p>
                                        </div>
                                        <div className="mt-6">
                                            <p className="tracking-tight text-base font-medium leading-4 text-gray-800">42 size</p>
                                        </div>
                                        <div className="mt-6">
                                            <p className="tracking-tight text-base font-medium leading-4 text-gray-800 ">$ {item.productId.productDiscountPrice}</p>
                                        </div>
                                        <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                            <div className="w-full">
                                                <Link to={`/product/${item.productId._id}`}>
                                                    <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 ">
                                                        More information
                                                    </button>
                                                </Link>

                                            </div>
                                            <div className="w-full">
                                                <Link to={"/"}>
                                                    <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-black bg-gray-800 border border-gray-800 ">Add to cart</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
                )}
                </div>
                
            )
            }

        </div >
    )
}

export default WishList