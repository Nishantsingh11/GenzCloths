import React from 'react'
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai'

const ItemsForSeller = () => {
    return (
        <>
            <div>
                <h1 className='text-3xl font-bold text-center mt-5'>Items For Seller</h1>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://images.pexels.com/photos/17916576/pexels-photo-17916576/free-photo-of-silhouette-of-outdoor-stairs.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                    <div className='flex justify-around mb-5 mt-5'>
                        <AiTwotoneEdit className='text-3xl cursor-pointer text-gray-500 hover:text-gray-700' />
                        <AiTwotoneDelete className='text-3xl cursor-pointer text-gray-500 hover:text-gray-700' />
                    </div>
                </div>



            </div>
        </>
    )
}

export default ItemsForSeller