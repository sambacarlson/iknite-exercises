// import React from "react";


export default function Products(): JSX.Element {
  return (
    <div className="relative">
      <div className="desktop:absolute left-[-179px] top-[100px] bg-white w-full desktop:w-[345px] mb-6 desktop:mb-0 pt-6 desktop:pt-0 desktop:h-[373px] flex flex-col justify-around items-center">
        <div className="w-full pl-8">
          <div className="flex flex-row items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-[#FD661F]"></div>
            <h4 className="text-[21px] font-bold">$500+</h4>
          </div>  
          <p className="text-[12px], text-[#6A6868CC] ml-6">Earn per day</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <svg width="200" height="200" viewBox="0 0 126 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M126 63C126 54.7267 124.37 46.5345 121.204 38.8909C118.038 31.2474 113.398 24.3024 107.548 18.4523C101.698 12.6022 94.7526 7.96164 87.1091 4.79559C79.4655 1.62954 71.2733 -3.61636e-07 63 0C54.7267 3.61637e-07 46.5345 1.62954 38.8909 4.79559C31.2474 7.96164 24.3024 12.6022 18.4523 18.4523C12.6022 24.3024 7.96163 31.2474 4.79559 38.8909C1.62954 46.5345 -7.23273e-07 54.7267 0 63H23.6326C23.6326 57.8302 24.6509 52.711 26.6293 47.9348C28.6077 43.1585 31.5074 38.8187 35.163 35.1631C38.8186 31.5075 43.1585 28.6077 47.9347 26.6293C52.711 24.6509 57.8302 23.6326 63 23.6326C68.1698 23.6326 73.289 24.6509 78.0652 26.6293C82.8415 28.6077 87.1814 31.5074 90.837 35.163C94.4926 38.8186 97.3923 43.1585 99.3707 47.9347C101.349 52.711 102.367 57.8302 102.367 63H126Z" fill="#FD661F"/></svg>
          </div>
          <div className="relative bottom-12 flex flex-col items-center">
            <h4 className="text-[21px], font-bold">$15,000</h4>
            <p className="text-[12px]">Earned</p>
          </div>
        </div>
      </div>
      <div className="relative bg-primary w-full desktop:w-[325px] h-[450px] desktop:h-[500px] desktop:m-1 p-6">
        <div className="flex flex-col items-start justify-between  h-full">
          <img src="assets/armchair.png" alt="product" className="bg-white w-[343px] " />
          <h4 className="text-white font-bold text-[21px]">classic Sofa</h4>
          <p className="text-white text-[12px] leading-6">Our popular Mika style is a modern take on the classic button down sofa.</p>
          <div className="w-full h-[64px] ring-1 ring-[#DBE0DA4D] flex justify-center items-center">
            <p className="text-white text-[16px] font-bold">Buy Now For $56</p>
          </div>
        </div>
        <div className="absolute top-[20px] desktop:top-[60px] right-[-20px] desktop:right-[-60px] w-[120px] desktop:w-[143px] h-[130px] desktop:h-[172px] bg-secondary flex flex-col justify-around items-center">
          <h4 className="font-bold text-[12px] text-white"> Dashboard</h4>
          <div className="flex flex-row justify-between items-end space-x-1">
            <div className="w-[15px] h-[75px]  rounded-xl bg-white"></div>
            <div className="w-[15px] h-[32px] rounded-xl bg-[#F6CBBB]"></div>
            <div className="w-[15px] h-[24px] rounded-xl bg-white"></div>
            <div className="w-[15px] h-[75px] rounded-xl bg-[#F6CBBB]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}