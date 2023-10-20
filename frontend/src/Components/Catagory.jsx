import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = () => {
  return (
    <div className="p-10">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={`/showallsubcategory/Mens Clothing`}>

            <div className='h-96'>

              <img className="w-full h-full" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Mountain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600"> Mens Clothing</div>
            </div>
          </Link>
        </div>

        {/* Item 2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={`/showallsubcategory/Womens Clothing`}>
            <div className='h-96'>

              <img className="w-full h-full" src="https://images.pexels.com/photos/6347892/pexels-photo-6347892.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Mountain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-700">Womens Clothing</div>
            </div>
          </Link>
        </div>

        {/* Item 3 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={`/showallsubcategory/Kids Clothing`}>
            <div className='h-96'>

              <img className="w-full h-full" src="https://images.pexels.com/photos/5325571/pexels-photo-5325571.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Mountain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-700">Kids Clothing</div>
            </div>
          </Link>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={`/showallsubcategory/Footwear`}>


            <div className='h-96'>

              <img className="w-full h-full" src="https://images.pexels.com/photos/17504550/pexels-photo-17504550/free-photo-of-tattoos-on-man-arm.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Mountain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-700">Footwear</div>
            </div>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={`/showallsubcategory/Accessories`}>
            <div className='h-96'>

              <img className="w-full h-full" src="https://images.pexels.com/photos/18403112/pexels-photo-18403112/free-photo-of-casual-style-man.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Mountain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-700">Accessories</div>
            </div>
          </Link>
        </div>
        {/* Add a "More" button */}
        <div className="max-w-sm rounded overflow-hidden flex items-center"> {/* Added 'flex' and 'items-center' classes */}
          <Link to='/showallcategory'>
            <button className="w-full h-full border  text-gray-400 font-bold">
              More
            </button>
          </Link>
        </div>
      </div>


      <h1 className='text-gray-500 font-bold text-3xl uppercase mt-10 ml-5'>Other collection</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {/* Item 1 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={`/showallsubcategory/Sportswear`}>
            <div className='h-96'>

              <img className="w-full h-full" src="https://images.pexels.com/photos/1268513/pexels-photo-1268513.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Mountain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-600">Sportswear</div>
            </div>
          </Link>
        </div>

        {/* Item 2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={`/showallsubcategory/Headphones`}>
            <div className='h-96'>

              <img className="w-full h-full" src="https://images.pexels.com/photos/3756767/pexels-photo-3756767.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Mountain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-700">Headphones</div>
            </div>
          </Link>
        </div>

        {/* Item 3 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={`/showallsubcategory/Seasonal Wear`}>
            <div className='h-96'>

              <img className="w-full h-full" src="https://images.pexels.com/photos/6322727/pexels-photo-6322727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Mountain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-700">Seasonal Wear</div>
            </div>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={'/showallsubcategory/Ethnic Wear'}>
            <div className='h-96'>

              <img className="w-full h-full" src="https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Mountain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-700">Ethnic Wear</div>
            </div>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={`/showallsubcategory/Workwear`}>
            <div className='h-96'>

              <img className="w-full h-full" src="https://images.pexels.com/photos/6316063/pexels-photo-6316063.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Mountain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-700">Workwear</div>
            </div>
          </Link>
        </div>
        {/* Add a "More" button */}
        <div className="max-w-sm rounded overflow-hidden flex items-center"> {/* Added 'flex' and 'items-center' classes */}
          <button className="w-full h-full border  text-gray-400 font-bold">
            More
          </button>
        </div>
      </div>


      <div className='flex justify-between mt-10'>

        <div className="max-w-sm rounded overflow-hidden shadow-lg ml-6  ">
          <Link to={'/showallsubcategory/Special Occasions'}>
            <div className='h-96'>

              <img className="w-full h-full" src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9ybWFsJTIwZm9yJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Mountain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-700">Special Occasions</div>
            </div>
          </Link>
          <Link to={`/showallsubcategory/Plus Size Clothing`}>
            <div className='h-96'>
              <img className="w-full h-full" src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmwlMjB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Mountain" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-700">Plus Size Clothing</div>
            </div>
          </Link>
        </div>
        <div className='w-9/12 h-5/6'>
          <img className="w-full h-full " src="https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Catagory;
