import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const ProgressPage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group ">
        <div className="absolute -left-12 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Progress</h2>
      </div>
      {/* End Title */}

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Progress
        </p>
        <ViewComponent>
          <input type="checkbox" className="toggle" />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="checkbox" className="toggle"/>`}
        />
      </section>
    </LayoutContent>
  );
};

export default ProgressPage;
