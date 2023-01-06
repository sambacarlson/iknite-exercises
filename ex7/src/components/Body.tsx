// import React from "react";
import CardObj from '../Datas';
import Cards from './Cards';
import Products from "./Products";
import People from './People';

export default function Body(): JSX.Element {
  return (
    <div>
      <div id="Hero" className="w-full h-[650px] p-16 text-white bg-primary grid grid-cols-3 gap-12">
        <div className="col-span-1">
          <h1 className="text-[90px] font-bold leading-[120px]">Shopify Products</h1>
          <p className="text-[21px] pt-4">
            More than 80,000+ companies trust our business
          </p>
          <div className="realative w-[375px] h-[100px] mt-20 bg-white flex flex-row justify-between items-center">
            <img src="assets/greenman.png" alt="John Doe" className="w-24 relative bottom-5 left-5"/>
            <div className="text-center">
              <h4 className="text-black">John Smith</h4>
              <p className="text-black">Watch our intro video</p>
            </div>
            <div className="relative -right-6 bg-white rounded-full">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM28.3301 19.3798C27.1794 18.6127 25.6999 18.5412 24.4805 19.1937C23.2612 19.8463 22.5 21.117 22.5 22.5V37.5C22.5 38.883 23.2612 40.1537 24.4805 40.8063C25.6999 41.4589 27.1794 41.3873 28.3301 40.6202L39.5801 33.1202C40.6234 32.4247 41.25 31.2538 41.25 30C41.25 28.7462 40.6234 27.5753 39.5801 26.8798L28.3301 19.3798Z" fill="#FD661F"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-[#460]"></div>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>
          <h4 className="text-[16px]">SERVICE WE PROVIDE</h4>
          <h2 className="text-[46px] font-bold leading-[50px]">Build on both: Google web stories and AMP website format</h2>
        </div>
        <div className="flex items-center justify-center">
          <img src="assets/thanks.png" alt="thanks" />
        </div>
        <div className="flex flex-row justify-center">
          <div>
            <h4 className="text-[35px] font-bold">5640</h4>
            <p className="text-[16px]">Product safe per day using our tool</p>
          </div>
          <div>
            <h4 className="text-[35px] font-bold">6M+</h4>
            <p className="text-[16px]">Downloaded total in 2019-2020</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center w-[40vw] mx-auto">
        <h2 className="text-[50px] font-bold">Our Creative Process</h2>
        <p>
          Financial institutions provide financial services for members
          and clients. It is also termed as financial intermediaries because
          they act as middlemen between the servers and borrowers.
        </p>
      </div>
      <div className="flex flex-col desktop:flex-row w-full items-center justify-center">
        <Cards {...CardObj.SEO} />
        <Cards {...CardObj.CONTENT} />
        <Cards {...CardObj.CONVERSION} />
      </div>
      <div className="grid grid-cols-5 my-24 items-start bg-secondary h-full">
        <div className="relative bg-[#44a] col-span-2 ">
          <h2 className="text-[40px]">Why product stories? Learn more</h2>
          <ul className="listed ml-6">
            <li className="pl-6">
              <h3 className="text-[25px] font-bold">SEO optimized, high Google rank</h3>
              <p className="text-[16px]">By converting all your Shopify product pages in AMP format.</p>
            </li>
            <li className="pl-6">
              <h3 className="text-[25px] font-bold">Fast loading, low bounce rates</h3>
              <p className="text-[16px]">AMP is the latest Google technology allowing websites to load at much higher speeds.</p>
            </li>
            <li className="pl-6">
              <h3 className="text-[25px] font-bold">Immersive, direct conversion</h3>
              <p className="text-[16px]">The story format is already a proven layout for giving users a more interactive.</p>
            </li>
          </ul>
        </div>
        <div className="relative col-span-3 -left-44">
          <Products />
        </div>
      </div>
      <div className="mt-[450px] pb-10 grid grid-cols-2">
        <div className="bg-[#46d]">
          <People />
        </div>
        <div className="bg-[46d]">
          <p className="text-[16px]">CREATIVE INTELLIGENCE</p>
          <h2 className="text-[40px] font-bold">Know your ads inside & out-perform.</h2>
          <p className="text-[16px]">
            When do i feature my product? Which spokesperson
            is my target audience to? How to optimize my
            call to action? Get real-time answers to improve your
            creative mind-light. And see what’s worked in the past
            to get intel for your next campaign.
          </p>
        </div>
      </div>
    </div>
  );
}