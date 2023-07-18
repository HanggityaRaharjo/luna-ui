import React from "react";

const ViewComponent = ({ children }) => {
  return (
    <div className="bg-white  rounded-t-[10px]  border-2 border-[#dbdee5] p-2 flex flex-wrap  justify-center items-center gap-2 ">
      {children}
    </div>
  );
};

export default ViewComponent;
