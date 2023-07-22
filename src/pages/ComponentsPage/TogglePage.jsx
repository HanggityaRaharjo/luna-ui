import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const TogglePage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group ">
        <div className="absolute -left-12 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Toggle</h2>
      </div>
      {/* End Title */}
      {/* Simple Toggle */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Default Toggle
        </p>
        <ViewComponent>
          <input type="checkbox" className="toggle" />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="checkbox" className="toggle"/>`}
        />
      </section>
      {/* Simple Toggle */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Toggle On
        </p>
        <ViewComponent>
          <input type="checkbox" className="toggle" checked={"false"} />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="checkbox" className="toggle" checked/>`}
        />
      </section>
      {/* End Simple Toggle */}
      {/* Simple Toggle */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Toggle Colors
        </p>
        <ViewComponent>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={"false"}
          />
          <input
            type="checkbox"
            className="toggle toggle-secondary"
            checked={"false"}
          />
          <input
            type="checkbox"
            className="toggle toggle-accent"
            checked={"false"}
          />
          <input
            type="checkbox"
            className="toggle toggle-info"
            checked={"false"}
          />
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={"false"}
          />
          <input
            type="checkbox"
            className="toggle toggle-warning"
            checked={"false"}
          />
          <input
            type="checkbox"
            className="toggle toggle-error"
            checked={"false"}
          />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="checkbox" className="toggle toggle-primary" checked />
<input type="checkbox" className="toggle toggle-secondary" checked />
<input type="checkbox" className="toggle toggle-accent" checked />
<input type="checkbox" className="toggle toggle-info" checked />
<input type="checkbox" className="toggle toggle-success" checked />
<input type="checkbox" className="toggle toggle-warning" checked />
<input type="checkbox" className="toggle toggle-error" checked />`}
        />
      </section>
      {/* End Simple Toggle */}
    </LayoutContent>
  );
};

export default TogglePage;
