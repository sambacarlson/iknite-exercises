import React from "react";


export default function Navbar(): JSX.Element {
  const [sideMenu, setSideMenu] = React.useState(true)
  return (
    <div>
      <div className="flex flex-col desktop:hidden space-y-4 pt-6 pl-4 items-between justify-center text-[16px] font-bold text-[#3F6745]">
        <div className="flex flex-row items-center justify-between px-4">
          <div className="flex flex-row space-x-4">
            <button id="menuButton" onClick={hamburger}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#3F6745" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div className="">
              <img src="assets/logo1.png" alt="logo" className="w-[80px] h-[25px]"/>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <h4><a href="#" className="linked">Login</a></h4>
            <h4 className=""><a href="#" className="button">Sign up</a></h4>
          </div>
        </div>
        <div id="menuOptions" className={sideMenu? "hidden" : "block"}>
          <ul className="list-none flex flex-col space-y-4 px-4">
            <li><a href="#" className="linked">About</a></li>
            <li><a href="#" className="linked">Product</a></li>
            <li><a href="#" className="linked">Service</a></li>
            <li><a href="#" className="linked">Contact</a></li>
          </ul>
        </div>
        
      </div>

      <div className="hidden desktop:flex flex-row justify-between items-center text-[16px] font-bold text-[#3F6745]">
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
    </div>
  );

  function hamburger() {
    setSideMenu(prev => !prev)
  }
}