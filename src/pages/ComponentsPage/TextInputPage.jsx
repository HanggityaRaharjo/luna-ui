import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const TextInputPage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group ">
        <div className="absolute -left-8 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Text Input</h2>
      </div>
      {/* End Title */}

      {/* Text Input */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Text Input
        </p>
        <ViewComponent>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
          />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="text" placeholder="Type here" className="input w-full max-w-xs"/>
`}
        />
      </section>
      {/* End Text Input */}

      {/* Text Input Border */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Text Input With Border
        </p>
        <ViewComponent>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
`}
        />
      </section>
      {/* End Text Input Border */}

      {/* Text Input Border Primary */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Primary Color
        </p>
        <ViewComponent>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
`}
        />
      </section>
      {/* End Text Input Border Primary */}

      {/* Text Input Border secondary */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Secondary Color
        </p>
        <ViewComponent>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs"/>
`}
        />
      </section>
      {/* End Text Input Border secondary */}

      {/* Text Input Border accent */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Accent Color
        </p>
        <ViewComponent>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs"/>
`}
        />
      </section>
      {/* End Text Input Border accent */}

      {/* Text Input Border info */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Info Color
        </p>
        <ViewComponent>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs"/>
`}
        />
      </section>
      {/* End Text Input Border info */}

      {/* Text Input Border success */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Success Color
        </p>
        <ViewComponent>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-success w-full max-w-xs"
          />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs"/>
`}
        />
      </section>
      {/* End Text Input Border success */}

      {/* Text Input Border warning */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Warning Color
        </p>
        <ViewComponent>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-warning w-full max-w-xs"
          />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs"/>
`}
        />
      </section>
      {/* End Text Input Border warning */}

      {/* Text Input Border error */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Error Color
        </p>
        <ViewComponent>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
          />
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs"/>
`}
        />
      </section>
      {/* End Text Input Border error */}
    </LayoutContent>
  );
};

export default TextInputPage;
