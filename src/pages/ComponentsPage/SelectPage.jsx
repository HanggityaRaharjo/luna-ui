import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const SelectPage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group ">
        <div className="absolute -left-8 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Select</h2>
      </div>
      {/* End Title */}

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Select
        </p>
        <ViewComponent>
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<select className="select w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Select With Border
        </p>
        <ViewComponent>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Select Primary
        </p>
        <ViewComponent>
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<select className="select select-primary w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Select Secondary
        </p>
        <ViewComponent>
          <select className="select select-secondary w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<select className="select select-secondary w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Select Accent
        </p>
        <ViewComponent>
          <select className="select select-accent w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<select className="select select-accent w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Select Info
        </p>
        <ViewComponent>
          <select className="select select-info w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<select className="select select-info w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Select Success
        </p>
        <ViewComponent>
          <select className="select select-success w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<select className="select select-success w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Select Warning
        </p>
        <ViewComponent>
          <select className="select select-warning w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<select className="select select-warning w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Select Error
        </p>
        <ViewComponent>
          <select className="select select-error w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<select className="select select-error w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>`}
        />
      </section>
    </LayoutContent>
  );
};

export default SelectPage;
