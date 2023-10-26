import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import toast from 'react-hot-toast';
import Comments from '../Comments/Comments';


const SingleProduct = () => {
    const { id } = useParams()
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const [getTotal, setGetTotal] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [relatedproduct, setRelatedproduct] = useState([])
    const [cart, setCart] = useState({
        productId: id,
        quantity: quantity
    })
    const [isCartLoding, setIsCartLoding] = useState(true)
    const [getCartItemFromdb, setGetCartItemFromdb] = useState([])



    const config = useMemo(() => ({
        headers: {
            'Authorization': `${localStorage.getItem("token")}`,
        },
    }), []);

    useEffect(() => {
        axios.get(`http://localhost:8080/product/getproduct/${id}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
                setIsLoading(false)
                axios.get(`http://localhost:8080/product/relatedproduct/${res.data.productSubCategory}/${res.data._id}`)
                    .then((data) => {
                        setRelatedproduct(data.data)
                        console.log(data.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })

            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])


    const colors = data?.productColor[0].split(',');
    console.log(colors);
    const Sizes = data?.productSize[0].split(',')


    const handleQuantity = (e) => {
        setQuantity(e.target.value)
        setCart({
            ...cart,
            quantity: e.target.value
        })
    }
    console.log(cart);

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:8080/cart/getcart", config);
            console.log(res.data);
            setGetCartItemFromdb(res.data.cartItems);
            setGetTotal(res.data.total)
            setIsCartLoding(false);
        } catch (err) {
            console.log(err);
        }
    };

    const handleAddToCart = () => {
        axios.post("http://localhost:8080/cart/addtocart", cart, config)
            .then((res) => {
                toast.success(res.data.message)
                setIsCartOpen(true)
                fetchData()
            })
            .catch((err) => {
                console.log(err);
                toast.error("something went wrong")
            });

    }
    const handlecloseButton = () => {
        setIsCartOpen(false)

    }
    useEffect(() => {
        if (getCartItemFromdb?.length > 0) {
            setIsCartLoding(false);
        }
    }, [getCartItemFromdb]);
    console.log(getCartItemFromdb);
    console.log(getTotal);



    const handleAddToWishList = (id) => {
        axios.post("http://localhost:8080/wishlist/createwishlist", { productId: id }, config)
            .then((res) => {
                console.log(res.data);
                toast.success(res.data.msg)
            })
            .catch((res) => {
                console.log(res);
                toast.error("something went wrong")
            })
    }
    return (
        <div>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <>                <div>
                    <section className="text-gray-700 body-font overflow-hidden bg-white">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`http://localhost:8080/product/${data?.productImage}`} />
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{data.productBrand}</h2>
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.productName}</h1>
                                    <div className="flex mb-4">
                                        <span className="flex items-center">
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <span className="text-gray-600 ml-3">4 Reviews</span>
                                        </span>

                                    </div>
                                    <p className="leading-relaxed">{data.productDescription}</p>
                                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                        <div className="flex">
                                            <p className=" pt-4 pb-2 text-gray-700 text-base">
                                                <span className='text-sm'>Color: </span>
                                                <div className="flex items-center">
                                                    {colors.map((color, key) => (
                                                        <div
                                                            key={key}
                                                            style={{ backgroundColor: color, width: '20px', height: '20px', borderRadius: '50%', marginRight: '5px' }}
                                                        ></div>
                                                    ))}
                                                </div>
                                            </p>
                                        </div>
                                        <div className="flex ml-6 items-center">
                                            <span className="mr-3">Size</span>
                                            <div className="relative">
                                                <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                                    {
                                                        Sizes?.map((item, index) => (
                                                            <>

                                                                <option>{item}</option>


                                                            </>

                                                        ))
                                                    }
                                                </select>
                                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex ml-6 items-center">
                                            <span className="mr-3">
                                                Quantity
                                            </span>
                                            <div className="relative">
                                                <input type="number" min="1" max="10" step="1" className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                                                    value={quantity}
                                                    onChange={handleQuantity}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <span className="title-font font-medium text-2xl text-gray-900">$ {data.productPrice}</span>


                                        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                            onClick={handleAddToCart}
                                        >Add To Cart</button>
                                        <Link to={`/order/${data._id}`}>
                                            <button className="flex ml-10 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Buy now</button>
                                        </Link>

                                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4" onClick={() => handleAddToWishList(data._id)}>
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                            </svg>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CartDailog isCartOpen={isCartOpen}
                        handlecloseButton={handlecloseButton}
                        isCartLoding={isCartLoding}
                        getCartItemFromdb={getCartItemFromdb}
                        getTotal={getTotal}
                    />
                </div>


                    <div>
                        {/* related product */}
                        <div className="flex justify-center items-center h-20">
                            <div className="text-center font-bold text-3xl">Related Product</div>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {relatedproduct.map((product, index) => {
                            const colors = product.productColor[0].split(',');
                            return <Link to={`/product/${product._id}`} key={index}>
                                <div className="group relative" key={product._id}>
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={`http://localhost:8080/product/${product?.productImage}`} // Use the product image URL
                                            alt={product.productName} // Use the product name as alt text
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />

                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.productName}

                                            </h3>
                                            <p className=" pt-4 pb-2 text-gray-700 text-base">
                                                <span className='text-sm'>Color: </span>
                                                <div className="flex items-center">
                                                    {colors.map((color, key) => (
                                                        <div
                                                            key={key}
                                                            style={{ backgroundColor: color, width: '20px', height: '20px', borderRadius: '50%', marginRight: '5px' }}
                                                        ></div>
                                                    ))}
                                                </div>
                                            </p>
                                        </div>
                                        <p className="text-sm ">
                                            {product.productDiscountPrice} <br /> <span className="text-red-300 line-through">
                                                ${product.productPrice}</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        })}
                    </div>
                    <Comments productId = {id}/>
                </>

            )}
        </div>
    )
}

export default SingleProduct


export const CartDailog = ({ isCartOpen, handlecloseButton, getCartItemFromdb, getTotal }) => {
    const [isCartLoding, setIsCartLoding] = useState(true)


    useEffect(() => {
        if (getCartItemFromdb?.length > 0) {
            setIsCartLoding(false)
        }
    }, [getCartItemFromdb])


    return (
        <div>
            {
                isCartOpen ? (
                    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                        <div className="fixed inset-0 overflow-hidden">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                                    <div className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={handlecloseButton}>
                                                            <span className="absolute -inset-0.5"></span>
                                                            <span className="sr-only">Close panel</span>
                                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                {
                                                    isCartLoding ? (
                                                        <div className="mt-8">
                                                            <div className="flex justify-center items-center h-screen">
                                                                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="mt-8">
                                                            <div className="flow-root">
                                                                <ul className="-my-6 divide-y divide-gray-200">
                                                                    {getCartItemFromdb.map((items, index) => (
                                                                        <li className="flex py-6" key={index}>

                                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                                            </div>

                                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                                <div>
                                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                        <h3>
                                                                                            <a href="@">{items.productDetails.productName}</a>
                                                                                        </h3>
                                                                                        <p className="ml-4">${items
                                                                                            .productDetails.productPrice}</p>
                                                                                    </div>
                                                                                    <p className="mt-1 text-sm text-gray-500">{items.productDetails.productBrand}</p>
                                                                                </div>
                                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                                    <p className="text-gray-500">{items.quantity}</p>

                                                                                    <div className="flex">
                                                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    ))}


                                                                    {/* <!-- More products... --> */}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )}
                                            </div>

                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Total</p>
                                                    <p>${getTotal}</p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                <div className="mt-6">
                                                    <Link to="/order" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</Link>
                                                </div>
                                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                    <p>
                                                        or
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                            Continue Shopping
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )

                    : (null)

            }
        </div>
    )
}