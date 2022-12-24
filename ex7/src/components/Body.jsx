import React from "react";
// import CardObj from '../Datas';
// import Cards from './Cards';
import Products from "./Products";

export default function Body() {
  return (
    <div>
      {/* <div className="flex flex-col desktop:flex-row ">
        <Cards {...CardObj.SEO} />
        <Cards {...CardObj.CONTENT} />
        <Cards {...CardObj.CONVERSION} />
      </div> */}
      <div>
        <Products />
      </div>
    </div>
  );
}