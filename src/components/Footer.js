import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
   <div>
    <div >
    <h1 className=" md:text-[54px] mt-14 text-center 
         text-pink-600 text-shadow font-serif font-extrabold "> SHOP TODAY & GET 15% OFF</h1>
    </div>
    
<div className="w-full mt-24 bg-purple-800  px-2 py-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b  border-black py-8 px-4">
        <div>
          <h6 className="font-bold pt-2 uppercase"> About </h6>
          <ul>
            <li className="py-1">Title</li>
            <li className="py-1">Title</li>
            <li className="py-1">Title</li>
            <li className="py-1">Title</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold pt-2 uppercase"> Support </h6>
          <ul>
            <li className="py-1">Title</li>
            <li className="py-1">Title</li>
            <li className="py-1">Title</li>
            <li className="py-1">Title</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold pt-2 uppercase"> Pricing </h6>
          <ul>
            <li className="py-1">Title</li>
            <li className="py-1">Title</li>
            <li className="py-1">Title</li>
            <li className="py-1">Title</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold pt-2 uppercase"> Tours </h6>
          <ul>
            <li className="py-1">Title</li>
            <li className="py-1">Title</li>
            <li className="py-1">Title</li>
            <li className="py-1">Title</li>
          </ul>
        </div>

        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold uppercase"> Subscribe to our newsletters</p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4 outline-none text-black "
              type="email"
              placeholder="Enter your emil"
            ></input>
            <button className="p-2 mb-4 border rounded-md">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1400px] py-4 px-24 mx-auto justify-between sm:flex-row text-center text-gray-800">
        <p className="py-4"> 2022 ShopHub.Com, All Rights Reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl px-20">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutubeSquare />
        </div>
      </div>
    </div>
   </div>



    
  );
};

export default Footer;
