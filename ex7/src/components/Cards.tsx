// import React from "react";


export default function Cards(props: any): JSX.Element {
  return (
    <div className="w-11/12 desktop:w-[342px] desktop:h-[208px] bg-white flex flex-col pt-[10px] pr-[24px] pb-[40px] pl-[34px] m-3">
      <div>{props.cardImage}</div>
      <div className="text-2xl font-bold leading-7 my-3">{props.cardTitle}</div>
      <div className="text-[16px]">{props.cardText}</div>
    </div>
  );
}