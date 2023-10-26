import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import star from "../../img/starin.ico"
import toast from 'react-hot-toast';

const Comments = ({ productId }) => {
    console.log("form the comments", productId);
    const [comments, setComments] = useState([])
    const [formComent, setFormComent] = useState({
        comment: "",
        review: 0,
        product: productId
    })


    const config = useMemo(() => ({
        headers: {
            'Authorization': `${localStorage.getItem("token")}`,
        },
    }), []);
    const token = localStorage.getItem("token");
    console.log(token);
    const tokenPayload = JSON.parse(atob(token.split(".")[1]));
    console.log(tokenPayload.id);
    const userId = tokenPayload.id;
    console.log(userId);


    // Now, 'userId' contains the user's ID if they are authenticated



    useEffect(() => {



        axios.get(`http://localhost:8080/comment/getcomment/${productId}`)
            .then(res => {
                console.log("comments", res.data);
                setComments(res.data)
            })
            .catch(err => {
                console.log(err);
            }
            )

    }, [productId])
    if (Array.isArray(comments.data)) {
        console.log("comments", comments.data);
    }
    else {
        console.log("no", comments);
    }
    const handleCommnetChange = (e) => {
        setFormComent({ ...formComent, comment: e.target.value })
    }
    const handleRatingClick = (value) => {
        setFormComent({ ...formComent, review: value })
    };
    console.log("formComent", formComent);


    const handlePostComments = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/comment/addcomment", formComent, config)
            .then((res) => {
                toast.success(res.data.message)
                setFormComent({
                    comment: '',
                    review: ''
                })
                // get new data

                axios.get(`http://localhost:8080/comment/getcomment/${productId}`)
                    .then(res => {
                        console.log("comments", res.data);
                        setComments(res.data)
                    })
                    .catch(err => {
                        console.log(err);
                    }
                    )
            })
            .catch((err) => {
                console.log(err);
            })
    }
    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };
        return date.toLocaleString('en-US', options);
    }


    const handleDeleteComment = (commentId) => {
        axios.delete(`http://localhost:8080/comment/deletecomment/${commentId}`, config)
            .then((res) => {
                toast.success("comment deleted");
                // Update the comments list to remove the deleted comment
                axios.get(`http://localhost:8080/comment/getcomment/${productId}`)
                .then(res => {
                    console.log("comments", res.data);
                    setComments(res.data)
                })
                .catch(err => {
                    console.log(err);
                }
                )
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <>

            <div>

                {/* rateting things from here */}
                <div className=' text-2xl mt-10 text-gray-600'>

                    <h1>Leave a commnet and Rating</h1>
                </div>

                <div className="flex items-center justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((value, index) => (
                        <svg
                            key={index}
                            className={`w-6 h-6 ${value <= formComent.review ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                            onClick={() => handleRatingClick(value)}
                        >
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            />
                        </svg>
                    ))}
                </div>

                {/* adding a commnet here */}

                <div className="flex mx-auto items-center justify-center shadow-lg mb-4 max-w-lg">
                    <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                            <div className="w-full md:w-full px-3 mb-2 mt-2">
                                <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required onChange={handleCommnetChange}></textarea>
                            </div>
                        </div>
                        <div className="w-full md:w-full flex items-start  px-3">
                            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">

                                <p className="text-xs md:text-sm pt-px">Post Your exprocanxe</p>
                            </div>
                            <div className="-mr-1">
                                <button type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment'
                                    onClick={handlePostComments}>
                                    Post Comment

                                </button>
                            </div>
                        </div>
                    </form>

                </div>

                {/* showing the comments here */}
                <h1 className='font-bold text-3xl mt-10 text-gray-600'>Comments by buyer</h1>
                <div className="flex items-center justify-center mt-10 bg-white">

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {comments?.data?.map((comment, index) => (

                            <div key={index} className="mb-4"> {/* Add margin-bottom for spacing */}


                                <div className="bg-white text-black p-4 antialiased max-w-3xl">

                                    <img className="rounded-full h-8 w-8 mr-2 mt-1" src="https://picsum.photos/id/1027/200/200" alt="profile" />

                                    <div className="bg-gray-100 rounded-3xl px-4 pt-2 pb-2.5">
                                        <div className='flex justify-between'>

                                            <div className="font-semibold text-sm leading-relaxed">Jon Doe</div>

                                            <div key={index} className="mb-4">
                                                {comment.user === userId && (

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" onClick={() => handleDeleteComment(comment._id)}>
                                                        <line x1="10" y1="10" x2="90" y2="90" stroke="black" strokeWidth="5" />
                                                        <line x1="10" y1="90" x2="90" y2="10" stroke="black" strokeWidth="5" />
                                                    </svg>

                                                )}
                                            </div>
                                        </div>

                                        <div className="text-normal leading-snug md:leading-normal">{comment.comment}</div>
                                    </div>
                                    <div className="text-sm ml-4 mt-0.5 text-gray-500">
                                        {formatTimestamp(comment.timestamp)}
                                    </div>
                                    <div className="bg-white border-white rounded-full float-right -mt-7 mr-0.5 flex shadow items-center">
                                        {Array.from({ length: comment.review }, (_, i) => (
                                            <img src={star} alt="star png" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div >
        </>
    )
}

export default Comments