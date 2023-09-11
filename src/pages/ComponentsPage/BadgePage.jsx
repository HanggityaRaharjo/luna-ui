import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const ButtonPage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group">
        <div className="absolute -left-8  text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Badge</h2>
      </div>
      {/* End Title */}
      {/* Badge Colors*/}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span>Badge Colors
        </p>
        <ViewComponent>
          <div className="badge">badge</div>
          <div className="badge badge-primary">primary</div>
          <div className="badge badge-secondary">secondary</div>
          <div className="badge badge-accent">accent</div>
          <div className="badge badge-light">light</div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<div className="badge">badge</div>
<div className="badge badge-primary">primary</div>
<div className="badge badge-secondary">secondary</div>
<div className="badge badge-accent">accent</div>
<div className="badge badge-light">light</div>`}
        />
      </section>
      {/* End Badge Colors*/}
      {/* Badge State*/}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span>Badge State
        </p>
        <ViewComponent>
          <div className="badge badge-info">info</div>
          <div className="badge badge-success">success</div>
          <div className="badge badge-warning">warning</div>
          <div className="badge badge-error">error</div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<div className="badge badge-info">info</div>
<div className="badge badge-success">success</div>
<div className="badge badge-warning">warning</div>
<div className="badge badge-error">error</div>
`}
        />
      </section>
      {/* End Badge State*/}

      {/* Badge Outline*/}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span>Badge Outline
        </p>
        <ViewComponent>
          <div className="badge badge-primary badge-outline">primary</div>
          <div className="badge badge-secondary badge-outline">secondary</div>
          <div className="badge badge-accent badge-outline">accent</div>
          <div className="badge badge-light badge-outline">light</div>
          <div className="badge badge-info badge-outline">info</div>
          <div className="badge badge-success badge-outline">success</div>
          <div className="badge badge-warning badge-outline">warning</div>
          <div className="badge badge-error badge-outline">error</div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<div className="badge badge-primary badge-outline">primary</div>
<div className="badge badge-secondary badge-outline">secondary</div>
<div className="badge badge-accent badge-outline">accent</div>
<div className="badge badge-light badge-outline">light</div>
<div className="badge badge-info badge-outline">info</div>
<div className="badge badge-success badge-outline">success</div>
<div className="badge badge-warning badge-outline">warning</div>
<div className="badge badge-error badge-outline">error</div>
`}
        />
      </section>
      {/* End Badge Outline*/}

      {/* Badge In Button*/}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span>Badge In Button
        </p>
        <ViewComponent>
          <button className="btn">
            Inbox
            <div className="badge">+99</div>
          </button>
          <button className="btn">
            Inbox
            <div className="badge badge-error">+99</div>
          </button>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<button className="btn">
  Inbox
  <div className="badge">+99</div>
</button>
<button className="btn">
  Inbox
  <div className="badge badge-error">+99</div>
</button>
`}
        />
      </section>
      {/* End Badge In Button*/}
    </LayoutContent>
  );
};

export default ButtonPage;
