import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { CartContext } from "../context/CartContext";
import axios from "axios";

// const handeGetProfile = async () => {
//   await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
// };

const HeroHeader = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const {loggedIn, setLoggedIn} = useContext(LoginContext);


  const handleLoggedOut = ()=>{
      localStorage.removeItem("token");
      setLoggedIn(false);
  }

  return (
    <nav className="  bg-purple-900">
      <div className="flex flex-wrap justify-between w-full mx-auto  px-4 md:px-6 py-2.5">
        <NavLink to="#" className="flex items-center">
          <span className=" text-xl font-bold  shadow-lg text-red-500 hover:text-red-300">
            ShopHub
          </span>
        </NavLink>


{/* ?????????????????????????????????? */}

        <div className="flex items-center">
          {loggedIn ? (
            
            <p onClick={handleLoggedOut}
             
            className="text-md font-medium text-red-500 no-underline  hover:text-red-300">
              Log out
            </p>
          ) : (
            <NavLink
              to="/loginForm"
              className="text-md font-medium text-red-500 no-underline  hover:text-red-300"
            >
              Log in 
            </NavLink>
          )}




          <NavLink
            to="/shoppingCart"
            className="ml-6 text-lg font-bold  no-underline text-red-500  hover:text-red-300"
          >
            <MdOutlineShoppingCart />
          </NavLink>
          <p className="text-white border-2 w-5 h-5 border-red-500 ml-1 font-semibold bg-red-500 text-xs text-center rounded-full">
            {cart.length}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default HeroHeader;
