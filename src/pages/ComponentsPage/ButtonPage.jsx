import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const ButtonPage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group ">
        <div className="absolute -left-8 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Buttons</h2>
      </div>
      {/* End Title */}
      {/* Active Button */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Active Button
        </p>
        <ViewComponent>
          <button className="btn">button</button>

          <button className="btn btn-primary">primary</button>
          <button className="btn btn-secondary">secondary</button>
          <button className="btn btn-accent">accent</button>
          <button className="btn btn-light">light</button>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<button className="btn">button</button>
<button className="btn btn-primary">primary</button>
<button className="btn btn-secondary">secondary</button>
<button className="btn btn-accent">accent</button>
<button className="btn btn-light">light</button>
`}
        />
      </section>
      {/* End Active Button */}
      {/* State Button */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> State Button
        </p>
        <ViewComponent>
          <button className="btn btn-info">info</button>
          <button className="btn btn-success">success</button>
          <button className="btn btn-warning">warning</button>
          <button className="btn btn-error">error</button>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<button className="btn btn-info">info</button>
<button className="btn btn-success">success</button>
<button className="btn btn-warning">warning</button>
<button className="btn btn-error">error</button>`}
        />
      </section>
      {/* End State Button */}
      {/* State Outline Button */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Outline Button
        </p>
        <ViewComponent>
          <button className="btn btn-outline  btn-info ">info</button>
          <button className="btn btn-outline  btn-success">success</button>
          <button className="btn btn-outline  btn-warning">warning</button>
          <button className="btn btn-outline  btn-error">error</button>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<button className="btn btn-info">Info</button>
<button className="btn btn-success">success</button>
<button className="btn btn-warning">warning</button>
<button className="btn btn-error">error</button>`}
        />
      </section>
      {/* End State Outline Button */}
      {/* Button Size */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span>Button Size
        </p>
        <ViewComponent>
          <button className="btn btn-lg">Large</button>
          <button className="btn">Normal</button>
          <button className="btn btn-sm">Small</button>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<button className="btn btn-lg">Large</button>
<button className="btn">Normal</button>
<button className="btn btn-sm">Small</button>`}
        />
      </section>
      {/* End Button Size */}
      {/* Button Wide */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span>Wide Button
        </p>
        <ViewComponent>
          <button className="btn btn-wide">Wide</button>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<button className="btn btn-wide">Wide</button>`}
        />
      </section>
      {/* End Button Wide */}
      {/* Button Wide */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span>Wide Button
        </p>
        <ViewComponent>
          <button className="btn btn-wide">Wide</button>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<button className="btn btn-wide">Wide</button>`}
        />
      </section>
      {/* End Button Wide */}
    </LayoutContent>
  );
};

export default ButtonPage;
