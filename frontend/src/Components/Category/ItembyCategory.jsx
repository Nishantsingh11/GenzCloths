import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from './Sidebar';

const ItembyCategory = () => {
    const { maincategory, subcategory } = useParams();
    console.log(maincategory, subcategory);

    return (
        <div className="bg-white">
             <Sidebar maincategory = {maincategory} subcategory = {subcategory} />
      </div>
  
    )
}

export default ItembyCategory