import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const ProgressPage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group ">
        <div className="absolute -left-8 text-transparent group-hover:text-[#646cff] transition-all duration-300">
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
          <div className="flex justify-center items-center flex-col gap-2 w-full">
            <progress className="progress w-56" value="0" max="100"></progress>
            <progress className="progress w-56" value="10" max="100"></progress>
            <progress className="progress w-56" value="40" max="100"></progress>
            <progress className="progress w-56" value="70" max="100"></progress>
            <progress
              className="progress w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<progress className="progress w-56" value="0" max="100"></progress>
<progress className="progress w-56" value="10" max="100"></progress>
<progress className="progress w-56" value="40" max="100"></progress>
<progress className="progress w-56" value="70" max="100"></progress>
<progress className="progress w-56" value="100" max="100"></progress>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Progress Primary
        </p>
        <ViewComponent>
          <div className="flex justify-center items-center flex-col gap-2 w-full">
            <progress
              className="progress progress-primary w-56"
              value="0"
              max="100"
            ></progress>
            <progress
              className="progress progress-primary w-56"
              value="10"
              max="100"
            ></progress>
            <progress
              className="progress progress-primary w-56"
              value="40"
              max="100"
            ></progress>
            <progress
              className="progress progress-primary w-56"
              value="70"
              max="100"
            ></progress>
            <progress
              className="progress progress-primary w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<progress className="progress progress-primary w-56" value="0" max="100"></progress>
<progress className="progress progress-primary w-56" value="10" max="100"></progress>
<progress className="progress progress-primary w-56" value="40" max="100"></progress>
<progress className="progress progress-primary w-56" value="70" max="100"></progress>
<progress className="progress progress-primary w-56" value="100" max="100"></progress>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Progress Secondary
        </p>
        <ViewComponent>
          <div className="flex justify-center items-center flex-col gap-2 w-full">
            <progress
              className="progress progress-secondary w-56"
              value="0"
              max="100"
            ></progress>
            <progress
              className="progress progress-secondary w-56"
              value="10"
              max="100"
            ></progress>
            <progress
              className="progress progress-secondary w-56"
              value="40"
              max="100"
            ></progress>
            <progress
              className="progress progress-secondary w-56"
              value="70"
              max="100"
            ></progress>
            <progress
              className="progress progress-secondary w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<progress className="progress progress-secondary w-56" value="0" max="100"></progress>
<progress className="progress progress-secondary w-56" value="10" max="100"></progress>
<progress className="progress progress-secondary w-56" value="40" max="100"></progress>
<progress className="progress progress-secondary w-56" value="70" max="100"></progress>
<progress className="progress progress-secondary w-56" value="100" max="100"></progress>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Progress Accent
        </p>
        <ViewComponent>
          <div className="flex justify-center items-center flex-col gap-2 w-full">
            <progress
              className="progress progress-accent w-56"
              value="0"
              max="100"
            ></progress>
            <progress
              className="progress progress-accent w-56"
              value="10"
              max="100"
            ></progress>
            <progress
              className="progress progress-accent w-56"
              value="40"
              max="100"
            ></progress>
            <progress
              className="progress progress-accent w-56"
              value="70"
              max="100"
            ></progress>
            <progress
              className="progress progress-accent w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<progress className="progress progress-accent w-56" value="0" max="100"></progress>
<progress className="progress progress-accent w-56" value="10" max="100"></progress>
<progress className="progress progress-accent w-56" value="40" max="100"></progress>
<progress className="progress progress-accent w-56" value="70" max="100"></progress>
<progress className="progress progress-accent w-56" value="100" max="100"></progress>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Progress Success
        </p>
        <ViewComponent>
          <div className="flex justify-center items-center flex-col gap-2 w-full">
            <progress
              className="progress progress-success w-56"
              value="0"
              max="100"
            ></progress>
            <progress
              className="progress progress-success w-56"
              value="10"
              max="100"
            ></progress>
            <progress
              className="progress progress-success w-56"
              value="40"
              max="100"
            ></progress>
            <progress
              className="progress progress-success w-56"
              value="70"
              max="100"
            ></progress>
            <progress
              className="progress progress-success w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<progress className="progress progress-success w-56" value="0" max="100"></progress>
<progress className="progress progress-success w-56" value="10" max="100"></progress>
<progress className="progress progress-success w-56" value="40" max="100"></progress>
<progress className="progress progress-success w-56" value="70" max="100"></progress>
<progress className="progress progress-success w-56" value="100" max="100"></progress>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Progress Info
        </p>
        <ViewComponent>
          <div className="flex justify-center items-center flex-col gap-2 w-full">
            <progress
              className="progress progress-info w-56"
              value="0"
              max="100"
            ></progress>
            <progress
              className="progress progress-info w-56"
              value="10"
              max="100"
            ></progress>
            <progress
              className="progress progress-info w-56"
              value="40"
              max="100"
            ></progress>
            <progress
              className="progress progress-info w-56"
              value="70"
              max="100"
            ></progress>
            <progress
              className="progress progress-info w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<progress className="progress progress-info w-56" value="0" max="100"></progress>
<progress className="progress progress-info w-56" value="10" max="100"></progress>
<progress className="progress progress-info w-56" value="40" max="100"></progress>
<progress className="progress progress-info w-56" value="70" max="100"></progress>
<progress className="progress progress-info w-56" value="100" max="100"></progress>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Progress Warning
        </p>
        <ViewComponent>
          <div className="flex justify-center items-center flex-col gap-2 w-full">
            <progress
              className="progress progress-warning w-56"
              value="0"
              max="100"
            ></progress>
            <progress
              className="progress progress-warning w-56"
              value="10"
              max="100"
            ></progress>
            <progress
              className="progress progress-warning w-56"
              value="40"
              max="100"
            ></progress>
            <progress
              className="progress progress-warning w-56"
              value="70"
              max="100"
            ></progress>
            <progress
              className="progress progress-warning w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<progress className="progress progress-warning w-56" value="0" max="100"></progress>
<progress className="progress progress-warning w-56" value="10" max="100"></progress>
<progress className="progress progress-warning w-56" value="40" max="100"></progress>
<progress className="progress progress-warning w-56" value="70" max="100"></progress>
<progress className="progress progress-warning w-56" value="100" max="100"></progress>`}
        />
      </section>

      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Progress Error
        </p>
        <ViewComponent>
          <div className="flex justify-center items-center flex-col gap-2 w-full">
            <progress
              className="progress progress-error w-56"
              value="0"
              max="100"
            ></progress>
            <progress
              className="progress progress-error w-56"
              value="10"
              max="100"
            ></progress>
            <progress
              className="progress progress-error w-56"
              value="40"
              max="100"
            ></progress>
            <progress
              className="progress progress-error w-56"
              value="70"
              max="100"
            ></progress>
            <progress
              className="progress progress-error w-56"
              value="100"
              max="100"
            ></progress>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<progress className="progress progress-error w-56" value="0" max="100"></progress>
<progress className="progress progress-error w-56" value="10" max="100"></progress>
<progress className="progress progress-error w-56" value="40" max="100"></progress>
<progress className="progress progress-error w-56" value="70" max="100"></progress>
<progress className="progress progress-error w-56" value="100" max="100"></progress>`}
        />
      </section>
    </LayoutContent>
  );
};

export default ProgressPage;
