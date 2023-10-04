import React, { useState } from 'react';
import { categories } from '../Category/Category';

const FormForSeller = () => {
    const [isToggle, setISToggle] = useState(false);
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const handleToggle = () => {
        setISToggle(!isToggle);
    };

    const selectCategory = (mainCategory, subCategory) => {
        setSelectedMainCategory(mainCategory);
        setSelectedSubCategory(subCategory);
    };

    // Function to get subcategories for the selected main category
    const getSubcategories = (mainCategory) => {
        const selectedCategory = categories.find((category) => category.name === mainCategory);
        if (selectedCategory) {
            return selectedCategory.subcategories;
        }
        return [];
    };

    return (
        <section className="py-1 bg-blueGray-50">
            {/* ... (rest of your code) */}
            <div className="bg-gray-100">
                <div className="max-w-md mx-auto" onClick={handleToggle}>
                    <label htmlFor="select" className="font-semibold block py-2">
                        Select Category
                    </label>
                    <div className="relative">
                        <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
                            <p className="px-4 appearance-none outline-none text-gray-800 w-full">
                                {isToggle ? 'Select Category' : selectedMainCategory}
                            </p>
                            <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
                                {/* Your icon */}
                            </button>
                            <label
                                htmlFor="show_more"
                                className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
                            >
                                {/* Your icon */}
                            </label>
                        </div>
                        {isToggle && (
                            <>
                                <input type="checkbox" name="show_more" id="show_more" className="hidden peer" />
                                <div className="">
                                    {categories.map((mainCatItem, index) => {
                                        return (
                                            <div className="cursor-pointer group" key={index}>
                                                <button
                                                    className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100"
                                                    onClick={() => selectCategory(mainCatItem.name, null)}
                                                >
                                                    {mainCatItem.name}
                                                </button>
                                                {selectedMainCategory === mainCatItem.name && (
                                                    <div>
                                                        {getSubcategories(mainCatItem.name).map((subCatItem, subIndex) => (
                                                            <button
                                                                className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100"
                                                                onClick={() => selectCategory(mainCatItem.name, subCatItem)}
                                                                key={subIndex}
                                                            >
                                                                {subCatItem}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {/* ... (rest of your code) */}
        </section>
    );
};

export default FormForSeller;
