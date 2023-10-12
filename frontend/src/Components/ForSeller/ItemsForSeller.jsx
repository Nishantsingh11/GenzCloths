import React, { useEffect, useState } from 'react'
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ItemsForSeller = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/product/getallproduct")
            .then((res) => {
                setItems(res.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleEdit = (id) => {
        console.log(id);
    }
    const handleDelete = (id) => {
        console.log(id);
    }
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
            <div className='grid grid-cols-4 gap-4'>
                {items.map((item, index) => {
                    const shortenedDescription = shortenDescription(item.productDescription, 30);
                    const tagsArray = item.productTags.split(',');


                    return <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 " key={index}>
                        <img className="w-full" src="https://images.pexels.com/photos/17916576/pexels-photo-17916576/free-photo-of-silhouette-of-outdoor-stairs.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="Sunset in the mountains" />
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