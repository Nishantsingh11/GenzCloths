import React from 'react'
import Firstpage from './Firstpage' 
import Catagory from './Catagory'
import Footer from './Footer/Footer'
const Home = () => {
    return (
        <div>
            <Firstpage />
            <h1 className='ml-16 text-gray-500 font-bold text-3xl uppercase'>category</h1>
            <Catagory />
            <Footer />
        </div>
    )
}

export default Home