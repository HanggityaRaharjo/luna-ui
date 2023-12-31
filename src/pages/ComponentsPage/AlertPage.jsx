import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const AlertPage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group ">
        <div className="absolute -left-8  text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Alert</h2>
      </div>
      {/* End Title */}
      {/* Info Alert */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Neumorphism Alert
        </p>
        <ViewComponent>
          <div className="neu rounded-md p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-24 h-24 text-success"
            >
              <path
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-center font-bold text-success">Success</p>
          </div>
          <div className="neu rounded-md p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-24 h-24 text-error"
            >
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-center font-bold text-error">Warning</p>
          </div>
          <div className="neu rounded-md p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-24 h-24 text-info"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-center font-bold text-info">Info</p>
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
      {/* End Info Alert */}
      {/* Info Alert */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Info Alert
        </p>
        <ViewComponent>
          <div className="alert alert-info">
            <svg className="w-6 h-6 fill-transparent stroke-current stroke-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <span>Update is available</span>
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
      {/* End Info Alert */}
      {/* Success Alert */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Success Alert
        </p>
        <ViewComponent>
          <div className="alert alert-success">
            <svg className="w-6 h-6 fill-transparent stroke-current stroke-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Update is Success</span>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<div className="alert alert-success">
    <svg className="w-6 h-6 fill-transparent stroke-current stroke-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <span>Update is Success</span>
</div>
`}
        />
      </section>
      {/* End Success Alert */}
      {/* Warning Alert */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Warning Alert
        </p>
        <ViewComponent>
          <div className="alert alert-warning">
            <svg className="w-6 h-6 fill-transparent stroke-current stroke-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <span>Update is Warning</span>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<div className="alert alert-warning">
    <svg className="w-6 h-6 fill-transparent stroke-current stroke-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
    </svg>
    <span>Update is Warning</span>
</div>
`}
        />
      </section>
      {/* End Warning Alert */}
      {/* Error Alert */}
      <section className="mb-4">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Error Alert
        </p>
        <ViewComponent>
          <div className="alert alert-error">
            <svg className="w-6 h-6 fill-transparent stroke-current stroke-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Update is Error</span>
          </div>
        </ViewComponent>
        <CodeSnippet
          type="html"
          code={`<div className="alert alert-error">
    <svg className="w-6 h-6 fill-transparent stroke-current stroke-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <span>Update is Error</span>
</div>
`}
        />
      </section>
      {/* End Error Alert */}
    </LayoutContent>
  );
};

export default AlertPage;
