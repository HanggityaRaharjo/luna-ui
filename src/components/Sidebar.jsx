import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../lunaui/domhelper";

const Sidebar = () => {
  const url = window.location.pathname;
  const [stateUrl, setStateUrl] = useState(url);

  return (
    <div
      style={{ width: "20%" }}
      id="element-testing"
      className="text-[#1f2937]"
    >
      <div
        className="fixed"
        style={{
          width: "272px",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <Link id="link-loh" to={"/"} style={{ textDecoration: "none" }}>
          <div
            className="d-flex align-items-center"
            style={{
              height: "60px",
              paddingRight: "50px",
            }}
          >
            <div
              className="w-100 d-flex align-items-center"
              style={{
                height: "60px",
                gap: "10px",
              }}
            ></div>
          </div>
        </Link>
        {/* Sidebar Menu */}
        <div className="mt-3">
          <div className="flex items-center gap-2 mb-3">
            <svg
              stroke="currentColor"
              className="w-6 h-6 stroke-current stroke-2 text-primary fill-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>

            <span className="font-semibold">Guide</span>
          </div>
          <Link to={"/docs/install"} className="">
            <div
              className={`mb-3 w-56 rounded-lg p-2 hover:bg-neutral transition duration-300 hover:text-white ${
                stateUrl == "/docs/install"
                  ? "bg-neutral text-white"
                  : "bg-transparent"
              }`}
            >
              <span> Getting Started </span>
            </div>
          </Link>
          <Link to={"/docs/color"} className="">
            <div
              className={`mb-3 w-56 rounded-lg p-2 hover:bg-neutral transition duration-300 hover:text-white ${
                stateUrl == "/docs/color"
                  ? "bg-neutral text-white"
                  : "bg-transparent"
              }`}
            >
              <span> Colors </span>
            </div>
          </Link>

          {/* Divider */}
          <div
            className="mb-3 border-b-2 border-gray-200"
            style={{ marginRight: "50px" }}
          ></div>
          {/* End Divider */}

          <div className="flex items-center gap-2 mb-3">
            <svg className="w-6 h-6 stroke-current stroke-2 text-primary fill-none">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>

            <span className="font-semibold">Components</span>
          </div>

          <Link to={"/components/navbar"} className="">
            <div
              className={`mb-3 w-56 rounded-lg p-2 hover:bg-neutral transition duration-300 hover:text-white ${
                stateUrl == "/components/navbar"
                  ? "bg-neutral text-white"
                  : "bg-transparent"
              }`}
            >
              <span> Navbar </span>
            </div>
          </Link>

          <Link to={"/components/alert"} className="">
            <div
              className={`mb-3 w-56 rounded-lg p-2 hover:bg-neutral transition duration-300 hover:text-white ${
                stateUrl == "/components/alert"
                  ? "bg-neutral text-white"
                  : "bg-transparent"
              }`}
            >
              <span> Alert </span>
            </div>
          </Link>
          <Link to={"/components/badge"}>
            <div
              className={`mb-3 w-56 rounded-lg p-2 hover:bg-neutral transition duration-300 hover:text-white ${
                stateUrl == "/components/badge"
                  ? "bg-neutral text-white"
                  : "bg-transparent"
              }`}
            >
              <span> Badge </span>
            </div>
          </Link>
          <Link to={"/components/button"}>
            <div
              className={`mb-3 w-56 rounded-lg p-2 hover:bg-neutral transition duration-300 hover:text-white ${
                stateUrl == "/components/button"
                  ? "bg-neutral text-white"
                  : "bg-transparent"
              }`}
            >
              <span> Button </span>
            </div>
          </Link>

          <Link to={"/components/card"}>
            <div
              className={`mb-3 w-56 rounded-lg p-2 hover:bg-neutral transition duration-300 hover:text-white ${
                stateUrl == "/components/card"
                  ? "bg-neutral text-white"
                  : "bg-transparent"
              }`}
            >
              <span> Card </span>
            </div>
          </Link>

          <Link to={"/components/toggle"}>
            <div
              className={`mb-3 w-56 rounded-lg p-2 hover:bg-neutral transition duration-300 hover:text-white ${
                stateUrl == "/components/toggle"
                  ? "bg-neutral text-white"
                  : "bg-transparent"
              }`}
            >
              <span> Toggle </span>
            </div>
          </Link>

          <Link to={"/components/select"}>
            <div
              className={`mb-3 w-56 rounded-lg p-2 hover:bg-neutral transition duration-300 hover:text-white ${
                stateUrl == "/components/select"
                  ? "bg-neutral text-white"
                  : "bg-transparent"
              }`}
            >
              <span> Select </span>
            </div>
          </Link>

          <Link to={"/components/progress"}>
            <div
              className={`mb-3 w-56 rounded-lg p-2 hover:bg-neutral transition duration-300 hover:text-white ${
                stateUrl == "/components/progress"
                  ? "bg-neutral text-white"
                  : "bg-transparent"
              }`}
            >
              <span> Progress </span>
            </div>
          </Link>
        </div>
        {/* End Sidebar Menu */}
      </div>
    </div>
  );
};

export default Sidebar;
