import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const DropdownPage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group ">
        <div className="absolute -left-8 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Dropdown</h2>
      </div>
      {/* End Title */}

      {/* Dropdown */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Dropdown
        </p>
        <ViewComponent>
          <div className="mb-28">
            <details className="dropdown">
              <summary className="btn">Dropdown</summary>
              <div className="content-dropdown bg-white shadow-md">
                <a href="">Content Dropdown</a>
                <a href="">Content Dropdown</a>
                <a href="">Content Dropdown</a>
              </div>
            </details>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<details className="dropdown">
    <summary className="btn">Dropdown</summary>
    <div className="content-dropdown bg-white shadow-md">
        <a href="...">Content Dropdown</a>
        <a href="...">Content Dropdown</a>
        <a href="...">Content Dropdown</a>
    </div>
</details>
`}
        />
      </section>
      {/* End Dropdown */}

      {/* Dropdown */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Dropdown
        </p>
        <ViewComponent>
          <div className="mb-28">
            <details className="dropdown">
              <summary className="btn">Dropdown</summary>
              <div className="content-dropdown bg-white shadow-md">
                <a href="">Content Dropdown</a>
                <a href="">Content Dropdown</a>
                <a href="">Content Dropdown</a>
              </div>
            </details>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<details className="dropdown">
    <summary className="btn">Dropdown</summary>
    <div className="content-dropdown bg-white shadow-md">
        <a href="...">Content Dropdown</a>
        <a href="...">Content Dropdown</a>
        <a href="...">Content Dropdown</a>
    </div>
</details>
`}
        />
      </section>
      {/* End Dropdown */}
    </LayoutContent>
  );
};

export default DropdownPage;
