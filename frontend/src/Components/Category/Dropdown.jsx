import React, { useState } from 'react';
import { categories } from './Category';

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subcategoryVisibility, setSubcategoryVisibility] = useState({});

  const toggleMainDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);

    // Toggle the visibility of subcategories for the selected category
    setSubcategoryVisibility((prevState) => ({
      ...prevState,
      [category.name]: !prevState[category.name],
    }));
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMainDropdown}
        className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
      >
        <span className="pr-1 font-semibold flex-1">
          {selectedCategory ? selectedCategory.name : 'Dropdown'}
        </span>
        <span>
          <svg
            className={`fill-current h-4 w-4 transform transition duration-150 ease-in-out ${
              isOpen ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
      </button>
      <ul
        className={`bg-white border rounded-sm ${isOpen ? 'block' : 'hidden'
          } absolute transition duration-150 ease-in-out origin-top min-w-32 w-56`}
      >
        {categories.map((category) => (
          <li className="relative px-3 py-1 hover:bg-gray-100" key={category.name}>
            <button
              onClick={() => handleCategoryClick(category)}
              className="w-full text-left flex items-center outline-none focus:outline-none"
            >
              <span className="pr-1 flex-1">{category.name}</span>
            </button>
            <ul
              className={`bg-white border rounded-sm absolute transition duration-150 ease-in-out origin-top-left min-w-54 w-56 text-center ml-52 ${
                selectedCategory === category && subcategoryVisibility[category.name]
                  ? 'block'
                  : 'hidden'
              }`}
            >
              {category.subcategories.map((subcategory) => (
                <li
                  key={subcategory}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  {subcategory}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
