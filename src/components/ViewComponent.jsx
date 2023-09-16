import React from "react";

const ViewComponent = ({ children }) => {
  return (
    <div className="bg-[#e9edf0] neu-active  rounded-t-[10px]  border-2 border-[#dbdee5] p-5 flex flex-wrap  justify-center items-center gap-2 neu-active">
      {children}
    </div>
  );
};

export default ViewComponent;
