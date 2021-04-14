import React from "react";

function MemName(props) {
  return (
    <div className="information">
    <img src={props.img} className="icon" alt="" />
    <p style={{textAlign: "center"}}>{props.title}</p>
    </div>
  );
}

export default MemName;