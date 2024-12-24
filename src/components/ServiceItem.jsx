import React from "react";

function ServiceItem(props) {
  return (
    <div className="lg:w-1/4 flex flex-row justify-center gap-3">
      <div className="icon bg-[#2CAEBA] text-4xl text-[rgba(0,0,0,0.8)] p-5">
        {props.icon}
      </div>
      <div>
        <h4 className="font-bold tracking-[0.2em]">{props.h4}</h4>
        <p className="text-[rgba(0,0,0,0.7)]">{props.p}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
