// import React from "react";


export default function Cards(props: any): JSX.Element {
  return (
    <div className="w-[401px] h-[168px] desktop:w-[342px] desktop:h-[208px] bg-white flex flex-col pt-[8px] pr-[24px] pb-[40px] pl-[24px] m-3">
      <div>{props.cardImage}</div>
      <div className="text-2xl font-bold">{props.cardTitle}</div>
      <div className="text-[16px]">{props.cardText}</div>
    </div>
  );
}