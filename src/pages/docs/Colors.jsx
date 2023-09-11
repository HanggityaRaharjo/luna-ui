import React from "react";
import LayoutContent from "../../LayoutContent";
import ViewComponent from "../../components/ViewComponent";
import CodeSnippet from "../../components/CodeSnippet";

const Colors = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group ">
        <div className="absolute -left-12 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Color</h2>
      </div>
      {/* End Title */}
      <section className="text-[#1f2937cc]">
        <div className="alert alert-info mb-4">
          <svg className="w-6 h-6 fill-transparent stroke-current stroke-2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          <span className="font-semibold uppercase">
            as we know to call a color class in tailwindcss using color with 11
            steps from value 50 - 950.
          </span>
        </div>

        <div className="mb-4">
          <p className="font-semibold text-lg mb-2">
            <span className="text-[#939399]">#</span> Example
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-2">
            <ul className="text-[#1f2937cc] list-disc">
              <li className="flex items-center gap-5 ">
                -<div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <p>bg-red-500</p>
              </li>
              <li className="flex items-center gap-5 ">
                -<div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <p>bg-green-500</p>
              </li>
              <li className="flex items-center gap-5 ">
                -<div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <p>bg-purple-500</p>
              </li>
              <li className="flex items-center gap-5 ">
                -<div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <p>bg-orange-500</p>
              </li>
              <li className="flex items-center gap-5 ">
                -<p className="font-semibold">etc</p>
              </li>
            </ul>
            <ul className="text-[#1f2937cc] list-disc">
              <li className="flex items-center gap-5 ">
                -<p className="text-red-500">text-red-500</p>
              </li>
              <li className="flex items-center gap-5 ">
                -<p className="text-green-500">text-green-500</p>
              </li>
              <li className="flex items-center gap-5 ">
                -<p className="text-purple-500">text-purple-500</p>
              </li>
              <li className="flex items-center gap-5 ">
                -<p className="text-orange-500">text-orange-500</p>
              </li>
              <li className="flex items-center gap-5 ">
                -<p className="font-semibold">etc</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="text-[#1f2937cc] mb-5">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Background Color
        </p>
        <ul className="text-[#1f2937cc] list-disc">
          <li className="flex items-center gap-5 ">
            -<div className="w-4 h-4 bg-primary rounded-full"></div>
            <p>bg-primary</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<div className="w-4 h-4 bg-secondary rounded-full"></div>
            <p>bg-secondary</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<div className="w-4 h-4 bg-accent rounded-full"></div>
            <p>bg-accent</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<div className="w-4 h-4 bg-neutral rounded-full"></div>
            <p>bg-neutral</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<div className="w-4 h-4 bg-info rounded-full"></div>
            <p>bg-info</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<div className="w-4 h-4 bg-success rounded-full"></div>
            <p>bg-success</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<div className="w-4 h-4 bg-warning rounded-full"></div>
            <p>bg-warning</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<div className="w-4 h-4 bg-error rounded-full"></div>
            <p>bg-error</p>
          </li>
        </ul>
      </section>
      <section className="text-[#1f2937cc] mb-5">
        <p className="font-semibold text-lg mb-2">
          <span className="text-[#939399]">#</span> Text Color
        </p>
        <ul className="text-[#1f2937cc] list-disc">
          <li className="flex items-center gap-5 ">
            -<p className="text-primary">text-primary</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<p className="text-secondary">text-secondary</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<p className="text-accent">text-accent</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<p className="text-neutral">text-neutral</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<p className="text-info">text-info</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<p className="text-success">text-success</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<p className="text-warning">text-warning</p>
          </li>
          <li className="flex items-center gap-5 ">
            -<p className="text-error">text-error</p>
          </li>
        </ul>
      </section>
    </LayoutContent>
  );
};

export default Colors;
