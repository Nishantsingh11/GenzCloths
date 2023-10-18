import React, { useEffect, useMemo, useState } from 'react'
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FaEdit } from "react-icons/fa";
const ItemsForSeller = () => {
    const [items, setItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editItem, setEditItem] = useState({
        productName: '',
        productDescription: '',
        productPrice: '',
        productQuantity: '',
        productSize: '',
        productColor: '',
        productBrand: '',
        productDiscount: '',
        productDiscountPrice: '',
        productTags: '',
        productMaterials: '',
    })
    const config = useMemo(() => ({
        headers: {
            'Authorization': `${localStorage.getItem("token")}`,
        },
    }), []);
    useEffect(() => {
        axios.get("http://localhost:8080/product/getproductbyuser",config)
            .then((res) => {
                setItems(res.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [config])
    const handleEdit = (id) => {
        axios.get("http://localhost:8080/product/getproduct/" + id)
            .then((res) => {
                console.log(res.data);
                setEditItem(res.data)
                setIsModalOpen(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }



    const handleEdited = (id) => {
        const edited = {
            productName: editItem.productName,
            productDescription: editItem.productDescription,
            productPrice: editItem.productPrice,
            productQuantity: editItem.productQuantity,
            productSize: editItem.productSize,
            productColor: editItem.productColor,
            productBrand: editItem.productBrand,
            productDiscount: editItem.productDiscount,
            productDiscountPrice: editItem.productDiscountPrice,
            productTags: editItem.productTags,
            productMaterials: editItem.productMaterials,
        }
        console.log(id);
        axios.put(`http://localhost:8080/product/editproduct/${id}`,editItem)
        .then((res)=>{
            console.log(res.data);
            toast.success("update success")
            setIsModalOpen(false)
        })
        .catch((err)=>{
            console.log(err);
            toast.dismiss("wrong")
            setIsModalOpen(true)

        })
        console.log("from the handleedit",edited);
        

        
    }
    console.log(editItem._id);
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/product/deleteproduct/${id}`)
            .then((res) => {
                console.log(res.data);
                toast.success("Item Deleted Successfully")
            })
            .catch((err) => {
                console.log(err);
                toast.error("Item Not Deleted")
            })

    }
console.log(`http://localhost:8080/product/${items?.productImage}`);

    function shortenDescription(description, maxLength) {
        const words = description.split(' ');
        if (words.length > maxLength) {
            return words.slice(0, maxLength).join(' ') + '...';
        }
        return description;
    }

    return (
        <>
            <div>
                <h1 className='text-3xl font-bold text-center mt-5'>Items For Seller</h1>
            </div>
            <div>
                <Link to="/seller/additem">
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded mt-5'>
                        Add New Item
                    </button>
                </Link>
            </div>




            {
                isModalOpen &&


                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                            <div className="mt-5">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10 ">
                                            <FaEdit />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Edit</h3>
                                            <div className="mt-2">
                                                <div>
                                                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
                                                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                                                        value={editItem.productName}
                                                        onChange={(e) => setEditItem({ ...editItem, productName: e.target.value })}
                                                    />

                                                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Product Description</label>
                                                    <textarea type="text" id="small-input" rows="4" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                                                        value={editItem.productDescription}
                                                        onChange={(e) => setEditItem({ ...editItem, productDescription: e.target.value })}
                                                    />


                                                    <div className='flex justify-between mt-2'>
                                                        <div className="flex flex-col">
                                                            <label htmlFor="productPrice" className="text-sm font-medium text-gray-900">Product Price</label>
                                                            <input
                                                                type="text"
                                                                id="productPrice"
                                                                value={editItem.productPrice}
                                                                onChange={(e) => setEditItem({ ...editItem, productPrice: e.target.value })}
                                                                className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                                                            />
                                                        </div>

                                                        <div className="flex flex-col">
                                                            <label htmlFor="productQuantity" className="text-sm font-medium text-gray-900">Product Quantity</label>
                                                            <input
                                                                type="text"
                                                                id="productQuantity"
                                                                value={editItem.productQuantity}
                                                                onChange={(e) => setEditItem({ ...editItem, productQuantity:e.target.value })}
                                                                className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                                                            />
                                                        </div>
                                                    </div>


                                                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Product Size</label>
                                                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                                                        value={editItem.productSize}
                                                        onChange={(e) => setEditItem({ ...editItem,productSize:e.target.value })}
                                                    />

                                                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Product Color</label>
                                                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                                                        value={editItem.productColor}
                                                        onChange={(e) => setEditItem({ ...editItem, productColor:e.target.value })}
                                                    />

                                                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Product Brand</label>
                                                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                                                        value={editItem.productBrand}
                                                        onChange={(e) => setEditItem({ ...editItem, productBrand:e.target.value})}
                                                    />



                                                    <div className='flex justify-between mt-2'>
                                                        <div className="flex flex-col">
                                                            <label htmlFor="productPrice" className="text-sm font-medium text-gray-900">Product Discount</label>
                                                            <input
                                                                type="text"
                                                                id="productPrice"
                                                                className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                                                                value={editItem.productDiscount}
                                                                onChange={(e) => setEditItem({ ...editItem, productDiscount:e.target.value})}
                                                            />
                                                        </div>

                                                        <div className="flex flex-col">
                                                            <label htmlFor="productQuantity" className="text-sm font-medium text-gray-900">Product DiscountPrice </label>
                                                            <input
                                                                type="text"
                                                                id="productQuantity"
                                                                className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                                                                value={editItem.productDiscountPrice}
                                                                onChange={(e) => setEditItem({ ...editItem,productDiscountPrice:e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Product Tags</label>
                                                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "

                                                        value={editItem.productTags}
                                                        onChange={(e) => setEditItem({ ...editItem, productTags:e.target.value})}
                                                    />

                                                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Product Materials</label>
                                                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                                                        value={editItem.productMaterials}
                                                        onChange={(e) => setEditItem({ ...editItem,productMaterials:e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                    onClick={()=>handleEdited(editItem._id)}
                                    >Change</button>
                                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={handleCancel}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }

            <div className='grid grid-cols-4 gap-4'>
                {items.map((item, index) => {
                    const shortenedDescription = shortenDescription(item.productDescription, 30);
                    const tagsArray = item.productTags.split(',')

                    return <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 " key={index}>
                        <img className="w-full" src={`http://localhost:8080/product/${item?.productImage}`} alt='some img'/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.productName}</div>
                            <p className="text-gray-700 text-base">
                                {shortenedDescription}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {tagsArray.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                >
                                    #{tag.trim()} {/* Remove any leading/trailing spaces */}
                                </span>
                            ))}


                        </div>
                        <div>
                            <p className="px-6 pt-4 pb-2 text-gray-700 text-base">
                                <span className="font-bold">Price: </span> ${item.productPrice}
                            </p>
                            <p className="px-6 pt-4 pb-2 text-gray-700 text-base">
                                <span className="font-bold">Quantity: </span> {item.productQuantity}
                            </p>
                            {/* for category and sub category */}
                            <p className="px-6 pt-4 pb-2 text-gray-700 text-base">
                                <span className="font-bold">Category: </span> {item.productMainCategory}
                            </p>
                            <p className="px-6 pt-4 pb-2 text-gray-700 text-base">
                                <span className="font-bold">Sub Category: </span> {item.productSubCategory}
                            </p>
                            {/* size and all */}
                            <p className="px-6 pt-4 pb-2 text-gray-700 text-base">
                                <span className="font-bold">Size: </span> {item.productSize}
                            </p>
                            <p className="px-6 pt-4 pb-2 text-gray-700 text-base">
                                <span className="font-bold">Color: </span> {item.productColor}
                            </p>
                            <p className="px-6 pt-4 pb-2 text-gray-700 text-base">
                                <span className="font-bold">Discount: </span> {item.productDiscount}%
                            </p>
                            <p className="px-6 pt-4 pb-2 text-gray-700 text-base">
                                <span className="font-bold">Discount Price: </span> ${item.productDiscountPrice}
                            </p>


                        </div>
                        <div>


                        </div>
                        <div className='flex justify-around mb-5 mt-5'>
                            <AiTwotoneEdit className='text-3xl cursor-pointer text-gray-500 hover:text-gray-700' onClick={() => handleEdit(item._id)} />
                            <AiTwotoneDelete className='text-3xl cursor-pointer text-gray-500 hover:text-gray-700' onClick={() => handleDelete(item._id)} />
                        </div>
                    </div>
                })}




            </div>

        </>
    )
}

export default ItemsForSeller
