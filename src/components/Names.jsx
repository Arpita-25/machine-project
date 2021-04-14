import React from "react";
import Members from "./Members"
import MemNames from "./Members_names"
function Names() {
  return (
    <>
   {Members.map(noteItem => (
        <MemNames
          title={noteItem.title}
          img={noteItem.img}
        />
      ))}
    </>
  );
}
export default Names;
