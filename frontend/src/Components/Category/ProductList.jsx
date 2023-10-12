import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = ({ maincategory, subcategory, order }) => {
  const [products, setProducts] = useState()
  useEffect(()=>{
    if (order.order !== "") {
      const apiUrlForOrder = `http://localhost:8080/product/getproductbycategory/${maincategory.maincategory}/${subcategory.subcategory}/${order.order}`
     axios.get(apiUrlForOrder)
     .then((res)=>{
       setProducts(res.data)
     })
   }
  },[order.order,maincategory.maincategory,subcategory.subcategory])
  

  const apiUrl = `http://localhost:8080/product/getproductbycategory/${maincategory.maincategory}/${subcategory.subcategory}`;
  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

  }, [apiUrl]);

  return (
    <div>
      {!products ? (
        <div className="text-center font-bold text-3xl">Nothing to show here</div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            
            <Link to = {`/product/${product._id}`}>
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
            </Link>
          ))}
       </div>
      )}


    </div>
  );
};

export default ProductList;
