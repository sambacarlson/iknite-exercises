// import React from "react";


export default function Footer(): JSX.Element {
  return (
    <div className="bg-primary text-white h-[580px] w-full p-12 flex flex-col items-center justify-between">
      <div className="grid grid-cols-3 h-[380px] w-full">
        <div className="col-span-1">
          <h1 className="text-[90px] font-bold leading-[100px]">Contact with us</h1>
          <p className="text-[21px]">
            More than 80,000+ companies trust our business.
          </p>
        </div>
        <div className="col-span-2 flex flex-col justify-end items-end pb-10">
          <div className="bg-white text-black mt-8 md:mt-0 pl-2 flex flex-row items-center justify-between">
              <form>
                <input type="text" placeholder="Your business Email .." />
              </form>
              <a href="#" className="bg-secondary p-3 flex flex-row items-center justify-center space-x-4">
                <p className="text-white">Get started</p>
                <div className="bg-[#FF9460] p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
                </div>
              </a>
              </div>
          </div>
      </div>
      <div className="grid grid-cols-3 w-full">
        <div className="">
          <img src="assets/logo2.png" alt="logo" />
        </div>
        <div className="">
          <ul className="list-none flex flex-row items-center justify-around">
            <li><a href="#" className="linked">About</a></li>
            <li><a href="#" className="linked">Product</a></li>
            <li><a href="#" className="linked">Service</a></li>
            <li><a href="#" className="linked">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-row space-x-6 items-center justify-end">
          {/* social icons */}
          <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5.88235H5.22222V3.64706C5.22222 3.1 5.81667 3.05882 6 3.05882H7.88889V0H6C3.90833 0 2.33333 1.56765 2.33333 3.64706V5.88235H0V8.94118H2.33333V16H5.22222V8.94118H7.55555L8 5.88235Z" fill="white"/>
          </svg>
          <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12H3C2.20435 12 1.44129 11.6839 0.87868 11.1213C0.316071 10.5587 0 9.79565 0 9V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H9C9.79565 0 10.5587 0.316071 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3V9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12ZM3 1.2C2.52281 1.20066 2.06536 1.39052 1.72794 1.72794C1.39052 2.06536 1.20066 2.52281 1.2 3V9C1.20066 9.47719 1.39052 9.93464 1.72794 10.2721C2.06536 10.6095 2.52281 10.7993 3 10.8H9C9.47719 10.7993 9.93464 10.6095 10.2721 10.2721C10.6095 9.93464 10.7993 9.47719 10.8 9V3C10.7993 2.52281 10.6095 2.06536 10.2721 1.72794C9.93464 1.39052 9.47719 1.20066 9 1.2H3Z" fill="white"/>
            <path d="M5.99961 9.40001C5.32715 9.40001 4.6698 9.2006 4.11067 8.827C3.55154 8.45341 3.11576 7.9224 2.85842 7.30113C2.60108 6.67986 2.53375 5.99624 2.66494 5.3367C2.79613 4.67717 3.11995 4.07134 3.59545 3.59584C4.07095 3.12035 4.67677 2.79653 5.3363 2.66534C5.99584 2.53415 6.67947 2.60148 7.30073 2.85882C7.922 3.11616 8.45301 3.55194 8.82661 4.11107C9.2002 4.6702 9.39961 5.32755 9.39961 6.00001C9.39895 6.90154 9.04052 7.76596 8.40304 8.40344C7.76556 9.04092 6.90114 9.39934 5.99961 9.40001ZM5.99961 3.80001C5.56449 3.80001 5.13914 3.92904 4.77736 4.17077C4.41557 4.41251 4.13359 4.75611 3.96708 5.1581C3.80056 5.5601 3.757 6.00245 3.84188 6.42921C3.92677 6.85596 4.1363 7.24797 4.44398 7.55564C4.75165 7.86332 5.14365 8.07285 5.57041 8.15773C5.99717 8.24262 6.43952 8.19906 6.84151 8.03254C7.24351 7.86603 7.5871 7.58405 7.82884 7.22226C8.07058 6.86047 8.19961 6.43513 8.19961 6.00001C8.19895 5.41673 7.96695 4.85754 7.55451 4.4451C7.14208 4.03267 6.58288 3.80067 5.99961 3.80001Z" fill="white"/>
            <path d="M9.3998 3.40001C9.73117 3.40001 9.9998 3.13138 9.9998 2.80001C9.9998 2.46864 9.73117 2.20001 9.3998 2.20001C9.06843 2.20001 8.7998 2.46864 8.7998 2.80001C8.7998 3.13138 9.06843 3.40001 9.3998 3.40001Z" fill="white"/>
          </svg>
          <svg width="17" height="16" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7666 8.62023C10.6333 9.17723 10.2777 9.58229 9.78887 9.73415C8.63331 10.0886 2.36662 10.0886 1.21113 9.73415C0.722213 9.58222 0.366658 9.17715 0.233357 8.62023C-0.0777855 7.30378 -0.0777855 2.64559 0.233357 1.37977C0.366719 0.822774 0.722276 0.417712 1.21113 0.265849C2.36669 -0.0886164 8.63338 -0.0886164 9.78887 0.265849C10.2778 0.417782 10.6333 0.822845 10.7666 1.37977C11.0778 2.69622 11.0778 7.35441 10.7666 8.62023ZM4.01107 3.35434V6.59492C4.01107 6.84812 4.23332 6.99998 4.4111 6.84812L6.85554 5.22787C7.03332 5.1266 7.03332 4.8228 6.85554 4.67087L4.4111 3.05062C4.23332 2.94935 4.01107 3.10129 4.01107 3.30382V3.35434Z" fill="white"/>
          </svg>

        </div>
      </div>
      <hr className="bg-[#3F674580] w-full"/>
      <small className="text-[12px] mx-auto text-[#3F674580]">Copyright@ 2022. Iknite studio creative</small>
    </div>
  );
}