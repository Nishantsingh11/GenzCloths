import React from 'react'
import { categories } from '../Components/Category/Category';
import { Link } from 'react-router-dom';

const ShowAllCategory = () => {
  return (
    <div>
      <div className="p-10">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((item) => {
            return <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Link to = {`/showallsubcategory/${item.name}`}>
              <div className='h-96'>
                <img className="w-full h-full" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Mountain" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-600">{item.name}</div>
              </div>
              </Link>
            </div>
          })}

        </div>
      </div>
    </div >
  )
}

export default ShowAllCategory