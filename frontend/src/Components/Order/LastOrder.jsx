import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';


const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const config = useMemo(() => ({
    headers: {
        'Authorization': `${localStorage.getItem("token")}`,
    },
}), []);

  useEffect(() => {
    // Fetch order history data from the server
    axios.get("http://localhost:8080/order/orderhistory", config)
      .then((res) => {
        setOrderHistory(res.data.history);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [config]);

  return (
    <div>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col  text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Thank you for your order!
          </h1>
        </div>
        {isLoading ? (
          <div className='text-center'>
            <h1>Loading order history...</h1>
          </div>
        ) : (
          <div>
            {orderHistory.map((order, index) => (
              <div key={index} className="my-6 p-4 border rounded-md shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">Order #{order._id}</h2>
                <p className="text-base text-gray-600">{new Date(order.orderDate).toLocaleString()}</p>
                <div className="mt-4 space-y-4">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                          alt={item.product.name}
                          className="w-16 h-16 mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg font-semibold text-gray-800">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xl font-semibold text-gray-800 mt-4">
                  Total: ${order.totalAmount}
                </p>
              </div>
            ))}
          </div>
         )} 
      </div>
    </div>
  );
};

export default OrderHistory;
