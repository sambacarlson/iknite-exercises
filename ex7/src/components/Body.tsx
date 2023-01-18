// import React from "react";
import CardObj from '../Datas';
import Cards from './Cards';
import Products from "./Products";
import People from './People';

export default function Body(): JSX.Element {
  return (
    <div>
      <div id="Hero" className="w-full desktop:h-[650px] p-8 desktop:p-16 mb-10 text-white bg-primary grid grid-cols-3 gap-12">
        <div className="col-span-3 desktop:col-span-1">
          <h1 className="text-[40px] desktop:text-[90px] font-bold desktop:leading-[120px]">Shopify Products</h1>
          <p className="text-[21px] pt-4">
            More than 80,000+ companies trust our business
          </p>
          <div className="realative w-full desktop:w-[375px] h-[80px] desktop:h-[100px] mt-20 bg-white flex flex-row justify-between items-center">
            <img src="assets/greenman.png" alt="John Doe" className="w-16 desktop:w-24 relative bottom-1 desktop:bottom-5 left-2 desktop:left-5"/>
            <div className="text-center">
              <h4 className="text-black">John Smith</h4>
              <p className="text-black">Watch our intro video</p>
            </div>
            <div className="relative -right-4 desktop:-right-6 bg-white rounded-full">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM28.3301 19.3798C27.1794 18.6127 25.6999 18.5412 24.4805 19.1937C23.2612 19.8463 22.5 21.117 22.5 22.5V37.5C22.5 38.883 23.2612 40.1537 24.4805 40.8063C25.6999 41.4589 27.1794 41.3873 28.3301 40.6202L39.5801 33.1202C40.6234 32.4247 41.25 31.2538 41.25 30C41.25 28.7462 40.6234 27.5753 39.5801 26.8798L28.3301 19.3798Z" fill="#FD661F"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="relative col-span-3 desktop:col-span-2 flex flex-col justify-end desktop:pl-16">
          <div className="flex flex-col desktop:flex-row items-end">
            <div className='hidden desktop:block mb-16'>
              <img src="assets/frame43.png" alt="dots" className='h-40'/>
            </div>
            <div className="bg-[#1E3322] w-full desktop:w-[340px] h-[390px] p-2 desktop:p-6 pb-16 flex flex-col justify-end mt-20 desktop:mt-0">
              <p className='text-[16px] font-bold'>Install the app you are just a click away to convert.</p>
            </div>
            <div className="hidden desktop:block desktop:absolute bottom-24 right-44">
              <img src="assets/line2.png" alt="curve" className='w-[390px]' />
            </div>
            <div className='bg-secondary w-full desktop:w-[320px] desktop:h-[340px] flex flex-row justify-center absolute desktop:bottom-40 desktop:right-28'>
              <img src="assets/businessman.png" alt="businessman" className='w-5/6'/>
            </div>
            <div className="hidden desktop:block desktop:absolute desktop:bottom-36 desktop:right-80">
              <div className="flex flex-row items-center justify-center space-x-2">
                <svg width="33" height="57" viewBox="0 0 33 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5371 56.8543C25.4998 56.8543 32.7695 49.5882 32.7695 40.6247C32.7695 31.849 25.8 24.716 17.0982 24.4215C18.151 17.3049 23.2537 8.63434 31.0038 0.883804C16.8859 0.881628 0.304509 21.0062 0.304511 40.6261C0.304511 49.5899 7.57212 56.8557 16.537 56.8557L16.5371 56.8543Z" fill="white"/>
                </svg>
                <svg width="33" height="57" viewBox="0 0 33 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5371 56.8543C25.4998 56.8543 32.7695 49.5882 32.7695 40.6247C32.7695 31.849 25.8 24.716 17.0982 24.4215C18.151 17.3049 23.2537 8.63434 31.0038 0.883804C16.8859 0.881628 0.304509 21.0062 0.304511 40.6261C0.304511 49.5899 7.57212 56.8557 16.537 56.8557L16.5371 56.8543Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center px-12">
        <div className='col-span-3 desktop:col-span-1'>
          <h4 className="text-[16px]">SERVICE WE PROVIDE</h4>
          <h2 className="text-[20px] desktop:text-[36px] font-bold desktop:leading-[50px]">Build on both: Google web stories and AMP website format</h2>
        </div>
        <div className="flex items-center justify-center col-span-3 desktop:col-span-1">
          <img src="assets/thanks.png" alt="thanks" />
        </div>
        <div className="col-span-3 desktop:col-span-1 flex flex-row justify-center ">
          <div className='p-4'>
            <h4 className="text-[24px] font-bold">5640</h4>
            <p className="text-[16px]">Product safe per day using our tool</p>
          </div>
          <div className='p-4'>
            <h4 className="text-[24px] font-bold">6M+</h4>
            <p className="text-[16px]">Downloaded total in 2019-2020</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center w-4/5 desktop:w-[40vw] mx-auto my-10 desktop:my-16">
        <h2 className="text-[30px] desktop:text-[50px] font-bold my-4">Our Creative Process</h2>
        <p className='leading-7'>
          Financial institutions provide financial services for members
          and clients. It is also termed as financial intermediaries because
          they act as middlemen between the servers and borrowers.
        </p>
      </div>
      {/* ============================= */}
      <div className="flex flex-col desktop:flex-row w-full items-center justify-center">
        <Cards {...CardObj.SEO} />
        <Cards {...CardObj.CONTENT} />
        <Cards {...CardObj.CONVERSION} />
      </div>
      <div className="flex flex-col desktop:flex-row my-10 desktop:my-24 items-start justify-between h-full px-12">
        <div className="relative desktop:w-2/5 desktop:px-8 pt-8">
          <h2 className="text-[24px] desktop:text-[36px] font-bold desktop:leading-[50px] pr-12 mb-7 desktop:mb-0">Why product stories? Learn more</h2>
          <ul className="listed ml-6">
            <li className="pl-6 my-4 leading-8 desktop:leading-10">
              <h3 className="text-[20px] font-bold">SEO optimized, high Google rank</h3>
              <p className="text-[16px]">By converting all your Shopify product pages in AMP format.</p>
            </li>
            <li className="pl-6 my-4 leading-10">
              <h3 className="text-[20px] font-bold">Fast loading, low bounce rates</h3>
              <p className="text-[16px]">AMP is the latest Google technology allowing websites to load at much higher speeds.</p>
            </li>
            <li className="pl-6 my-4 leading-10">
              <h3 className="text-[20px] font-bold">Immersive, direct conversion</h3>
              <p className="text-[16px]">The story format is already a proven layout for giving users a more interactive.</p>
            </li>
          </ul>
        </div>
        {/* =========================== */}
        <div className="desktop:mr-12 mt-10 desktop:mt-0">
          <Products />
        </div>
      </div>
      <div className="desktop:mt-[220px] pb-10 grid grid-cols-5">
        {/* =========================== */}
        <div className="col-span-5 desktop:col-span-3 desktop:pr-4">
          <People />
        </div>
        <div className="col-span-5 desktop:col-span-2 px-10 mt-12 desktop:mt-0">
          <p className="text-[16px]">CREATIVE INTELLIGENCE</p>
          <h2 className="text-[36px] font-bold leading-10 my-4">Know your ads inside & out-perform.</h2>
          <p className="text-[16px] leading-8">
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



