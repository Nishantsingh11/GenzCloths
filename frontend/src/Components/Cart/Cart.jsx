import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from "react-router-dom"

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [getTotal, setGetTotal] = useState([])
  const [getCartItemFromdb, setGetCartItemFromdb] = useState([])

  const config = useMemo(() => ({
    headers: {
      'Authorization': `${localStorage.getItem("token")}`,
    },
  }), []);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/cart/getcart", config);
      console.log(res.data);
      setGetCartItemFromdb(res.data.cartItems || []); // Ensure it's set as an array or an empty array
      setGetTotal(res.data.total || 0); // Ensure it's set as a number or 0
      setIsLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {


    const res =  axios.get("http://localhost:8080/cart/getcart", config);
    console.log(res.data);
    setGetCartItemFromdb(res.data.cartItems || []); // Ensure it's set as an array or an empty array
    setGetTotal(res.data.total || 0); // Ensure it's set as a number or 0
    setIsLoading(false)

  }, [config])
  console.log(getCartItemFromdb);
  console.log(getTotal);

  const handleRemove = async (productId) => {
    await axios.delete(`http://localhost:8080/cart/removeitem/${productId}`, config,)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message)
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      })



  }



  return (
    <div>
      {isLoading ? (
        <div className='text-center'>

          <h1>loading...</h1>
        </div>
      ) : (
        <div>
          {
            getCartItemFromdb && getCartItemFromdb.length === 0 ? (
              <>
                <div className='text-center text-2xl font-bold items-center'>
                  <h1>Nothing to show here</h1>
                </div>

                <div className='text-center mt-10'>

                  <Link to="/">
                    <button className='p-4 bg-gray-800 text-white font-bold hover:bg-gray-700 rounded-lg'>
                      Contine shopping
                    </button>
                  </Link>
                </div>
              </>
            ) : (



              <div className="h-screen  pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                  <div className="rounded-lg md:w-2/3">
                    {
                      getCartItemFromdb?.map((item, index) => (


                        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key={index}>
                          <div className='w-52 h-30'>

                            <img src={`http://localhost:8080/product/${item.productDetails.productImage}`} alt='something' className='w-full h-full ' />
                          </div>
                          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0">
                              <h2 className="text-lg font-bold text-gray-900">{item.productDetails
                                .productName}</h2>
                              <p className="mt-1 text-xs text-gray-700">${item.productDetails.productPrice}</p>
                            </div>
                            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                              <div className="flex items-center border-gray-100">
                                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number"
                                  value={item.quantity} min="1" />
                                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                              </div>
                              <div className="flex items-center space-x-4">
                                <p className="text-sm">${item.subtotal}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                  onClick={() => handleRemove(item.productDetails._id)}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                      <p className="text-gray-700">Subtotal</p>
                      <p className="text-gray-700">$129.99</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-700">Shipping</p>
                      <p className="text-gray-700">$4.99</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                      <p className="text-lg font-bold">Total</p>
                      <div className="">
                        <p className="mb-1 text-lg font-bold">${getTotal}</p>
                        <p className="text-sm text-gray-700">including VAT</p>
                      </div>
                    </div>
                    <Link to="/order">
                      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      )}
    </div>
  )
}

export default Cart