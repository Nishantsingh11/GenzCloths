import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductList = (maincategory, subcategories) => {
    const [products, setProducts] = useState()
    // console.log("comming from product list", maincategory, subcategories);
    // console.log("form line number 6 ",maincategory.maincategory, maincategory.subcategories);
    const productMainCategory = maincategory.maincategory.maincategory
    const productSubCategory = maincategory.maincategory.subcategory


    const apiUrl = `http://localhost:8080/product/getproductbycategory/${productMainCategory}/${productSubCategory}`;
    // console.log(apiUrl);




    useEffect(() => {
        axios.get(apiUrl)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })

    },[apiUrl]);

  return (
    <div>
      {!products ? (
        <div className="text-center font-bold text-3xl">Nothing to show here</div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div className="group relative" key={product._id}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" // Use the product image URL
                  alt={product.productName} // Use the product name as alt text
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />

              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.productName}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.productColor}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.productPrice}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
