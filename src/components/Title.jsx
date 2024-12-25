import React from "react";

function Title(props) {
  return (
    <h2 className="text-4xl font-bold text-[rgba(0,0,0,0.85)] tracking-widest mb-16 text-center block">
      {props.title1} <span className="text-blue-400">{props.title2}</span>
    </h2>
  );
}

export default Title;
