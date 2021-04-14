import React from "react";

function Inputs(props) {
  return (
    <><div className="input-container">
    <input type="number" className="input" onChange={props.value}/>
    <label htmlFor="">hello</label>
    <span>Vrated</span>
  </div></>
  );
}

export default Inputs;
