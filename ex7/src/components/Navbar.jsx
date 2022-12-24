import React from "react";


export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center text-[16px] font-bold text-[#3F6745]">
      <div className="flex flex-row items-center justify-between w-1/2">
        <div className="">
          <img src="assets/logo1.png" alt="logo" className="w-[165px] h-[51px]"/>
        </div>
        <div className="">
          <ul className="list-none flex flex-row space-x-6">
            <li><a href="#" className="linked">About</a></li>
            <li><a href="#" className="linked">Product</a></li>
            <li><a href="#" className="linked">Service</a></li>
            <li><a href="#" className="linked">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <h4><a href="#" className="linked">Login</a></h4>
        <h4 className=""><a href="#" className="button">Sign up</a></h4>
      </div>
    </div>
  );
}