import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories } from './Category/Category';

const ShowAllSubCategory = () => {
  const { category } = useParams();
  const mainCategory = categories.find((cat) => cat.name === category);
  console.log(mainCategory);

  if (!mainCategory) {
    return <div>Category not found</div>;
  }

  return (
    <div className="p-10">
      <div className="flex flex-wrap justify-center gap-4">
        {mainCategory.subcategories.map((subcategory, index) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
            <Link to={`/category/${mainCategory.name}/${subcategory}`}>
              <div className='h-96'>
                {/* You can display images and other information for subcategories here */}
                {/* For example: */}
                <img className="w-full h-full" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Mountain" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-600">{subcategory}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllSubCategory;
