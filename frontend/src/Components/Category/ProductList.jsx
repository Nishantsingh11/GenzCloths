import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = ({ maincategory, subcategory, order }) => {
  const [products, setProducts] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (order.order !== "") {
      const apiUrlForOrder = `http://localhost:8080/product/getproductbycategory/${maincategory.maincategory}/${subcategory.subcategory}/${order.order}`
      axios.get(apiUrlForOrder)
        .then((res) => {
          setProducts(res.data)
          setLoading(false)
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [order.order, maincategory.maincategory, subcategory.subcategory])


  const apiUrl = `http://localhost:8080/product/getproductbycategory/${maincategory.maincategory}/${subcategory.subcategory}`;
  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      })

  }, [apiUrl]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
      ) : (
        <div>
          {!products ? (
            <div className="text-center font-bold text-3xl">Nothing to show here</div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product, index) => (

                <Link to={`/product/${product._id}`} key={index}>
                  <div className="group relative" key={product._id}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={`http://localhost:8080/product/${product?.productImage}`} // Use the product image URL
                        alt={product.productName} // Use the product name as alt text
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />

                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.productName}

                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.productColor}</p>
                      </div>
                      <p className="text-sm ">
                        {product.productDiscountPrice} <br /> <span className="text-red-300 line-through">
                          ${product.productPrice}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )
      }
    </div>
  );
};

export default ProductList;
