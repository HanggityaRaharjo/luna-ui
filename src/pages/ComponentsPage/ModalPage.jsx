import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const ModalPage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group ">
        <div className="absolute -left-8 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Navbar</h2>
      </div>
      {/* End Title */}
      {/* Simple Navbar */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Simple Navbar
        </p>
        <ViewComponent>
          <div className="navbar  shadow-xl rounded-xl w-full bg-white">
            <a className="btn btn-light normal-case text-xl">LunaUI</a>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<div className="alert alert-info">
    <svg className="w-6 h-6 fill-transparent stroke-current stroke-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
    </svg>
    <span>Update is available</span>
</div>
`}
        />
      </section>
      {/* End Simple Navbar */}
      {/* Simple Navbar */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Simple Navbar
        </p>
        <ViewComponent>
          <div className="navbar bg-white shadow-xl rounded-lg gap-5">
            <div className="flex-none">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">Lunaui</a>
            </div>
            <div className="flex-none">
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<div className="alert alert-info">
    <svg className="w-6 h-6 fill-transparent stroke-current stroke-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
    </svg>
    <span>Update is available</span>
</div>
`}
        />
      </section>
      {/* End Simple Navbar */}
      {/* Simple Navbar */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="">#</span> Simple Navbar
        </p>
        <ViewComponent>
          <div className="navbar  shadow-xl rounded-xl">
            <a className="btn btn-light normal-case text-xl">LunaUI</a>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<div className="alert alert-info">
    <svg className="w-6 h-6 fill-transparent stroke-current stroke-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
    </svg>
    <span>Update is available</span>
</div>
`}
        />
      </section>
      {/* End Simple Navbar */}
    </LayoutContent>
  );
};

export default ModalPage;
