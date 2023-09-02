import { CartContext } from "../context/CartContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  const [list, setList] = useState([]);

  const handleGetData = async () => {
    console.log(cart);
    for (let id of cart) {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setList((list) => [...list, data]);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);
 
  return (
    <div className="  w-full max-w-md p-4 bg-white rounded-lg shadow sm:p-8 m-8 ">
    <div >
      {list.map((item)=>(
        <ul  className="divide-y divide-gray-200 ">
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-20 h-20 object-cover rounded"
                src={item.images}
                alt="#"
              ></img>
            </div>
  
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {item.title}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                price:${item.price}
              </p>
            </div>
          </div>
        </li>
      </ul>
      ))}
      
    </div>
  </div>

  );
};

export default ShoppingCart;
