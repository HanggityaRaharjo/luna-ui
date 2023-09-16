import { useState } from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import react from "../assets/react.png";
import laravel from "../assets/laravel.svg";
import vite from "../assets/vite.png";
import django from "../assets/django.svg";
import next from "../assets/next.svg";
import nuxt from "../assets/nuxt.svg";

function Card({ txtColor, bgColor, label, icon, image }) {
  return (
    <div className={`neu text-[#293948] rounded-md p-5`}>
      {icon}
      <div className=" rounded-lg mb-2 h-10 w-10 p-[2px]">
        <img src={image} alt="" className="h-10" />
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function OtherCard(props) {
  return (
    <div className="neu flex justify-center items-center h-[150px] rounded-md hover:shadow-md ">
      <div>
        <div className="flex justify-center">
          <img src={props.image} alt="" className="h-10" />
        </div>
        <p className="text-center text-[#293948]">{props.span}</p>
      </div>
    </div>
  );
}

export const Home = () => {
  return (
    <Layout>
      <div className="lg:mt-20 lg:mb-[80px] mb-10 flex justify-between items-center ">
        {/* Kiri */}
        <div
          className="lg:w-1/2 w-full relative  lg:block flex flex-col justify-center items-center"
          style={{ lineHeight: 1 }}
        >
          <div className="neu block lg:hidden w-fit px-5 rounded-md text-[64px]">
            <p className=" text-primary">LUNA UI</p>
          </div>
          <div className="lg:text-[64px] mt-5 lg:mt-0 text-[40px] text-[#293948] mb-5">
            <p className=" text-primary font-semibold hidden lg:block">
              LUNA UI
            </p>
            <p className="">Component UI</p>
            <p className="lg:mb-6">For TailwindCSS</p>
          </div>

          <p className="fw-700 lg:text-[20px] text-[#9999a0] lg:mb-12 mb-5">
            Copy the code & paste it to your project
          </p>

          <div className="">
            <Link to={"/docs/install"} className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>

        {/* Kanan */}
        <div className="lg:w-1/2 relative lg:flex justify-center items-center hidden">
          <div></div>
          {/* <img src={Logo} height={"180px"} alt="" className="relative" /> */}
          <div className="neu w w-80 h-80 rounded-full flex justify-center items-center px-5 text-[64px]">
            <p className=" text-primary">LUNA UI</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1  gap-4 relative mb-10">
        <Card
          bgColor={"bg-gray-200"}
          txtColor={"text-black"}
          image={"icon/easy-icon.svg"}
          label={
            <>
              <p className="font-semibold">semantic class names</p>
              <p className="text-[13px]">
                It's descriptive, faster, cleaner and easier to maintain.
              </p>
            </>
          }
        />
        <Card
          bgColor={"bg-gray-200"}
          txtColor={"text-black"}
          image={"icon/easy-icon.svg"}
          label={
            <>
              <p className="font-semibold">Free and open-source</p>
              <p className="text-[13px]">
                This is free and don't forget to star me on github.
              </p>
            </>
          }
        />
        <Card
          bgColor={"bg-gray-200"}
          txtColor={"text-black"}
          image={"icon/easy-icon.svg"}
          label={
            <>
              <p className="font-semibold">Easy to use</p>
              <p className="text-[13px]">
                Just copy the code and build your project faster
              </p>
            </>
          }
        />
      </div>

      <div className="relative text-[#293948] mb-10">
        <div>
          <div className="text-[32px] font-bold mb-5">
            Tailwinds CSS Components
          </div>
          <p className="mb-5">
            As we know tailwind make developer easy to styling element because
            their utility first class,but tailwind make the code so many long
            text codes ,luna makes you to build design faster and semantic class
            names
          </p>
        </div>
        {/* card */}
        <div className="flex flex-wrap justify-center gap-2 p-5 neu rounded-md">
          <div>
            <div className="hero min-h-[20rem]  w-full">
              <div className="flex-col hero-content lg:flex-row">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4GaBk6tBXL8MX7PCSPnK4C1S3cJB5juIIQ&usqp=CAU"
                  className="max-w-sm rounded-lg shadow-2xl"
                  alt="Tailwind CSS hero component"
                />
                <div>
                  <h1 className="text-5xl font-bold">Hello there</h1>
                  <p className="py-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste, laboriosam optio! Accusamus quidem recusandae nisi
                    explicabo eos, labore amet eius.
                  </p>
                  <button className="btn">Go</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit h-fit">
            <div className="neu-input rounded-full h-[40px] mb-2 w-[250px] lg:flex hidden px-2 gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={"20px"}
                height={"20px"}
                className="text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className=" text-gray-500">Search</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="neu py-2 px-5 font-semibold text-primary rounded-md">
                Button
              </button>
              <button className="btn">button</button>
              <button className="btn btn-primary">primary</button>
              <button className="btn btn-secondary">secondary</button>
              <button className="btn btn-accent">accent</button>
              <button className="btn btn-light">light</button>
            </div>
          </div>
          <div className="w-fit h-fit">
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
          </div>
          <div className="w-fit h-fit">
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
          </div>
          <div className="w-fit h-fit">
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
          </div>

          <div className="w-96 neu h-56 relative mt-10 p-5">
            <div className="w-32 h-32 rounded-full neu-active absolute -top-10 flex justify-center items-center">
              <img
                src="https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg"
                alt=""
                className="w-28 h-28 rounded-full object-cover object-center"
              />
            </div>
            <p className="mt-20 font-semibold">Cool Cat</p>
            <p>
              Miaw!! Miaw!! Miaw!! Miaw!! Miaw!! Miaw!! Miaw!! Miaw!! Miaw!!
              Miaw!! Miaw!!
            </p>
            <button className="btn btn-primary w-full text-md">$500</button>
          </div>
          <div className="w-96 neu h-56 relative mt-10 p-5">
            <div className="w-32 h-32 rounded-full neu-active absolute -top-10 flex justify-center items-center">
              <img
                src="https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg"
                alt=""
                className="w-28 h-28 rounded-full object-cover object-center"
              />
            </div>
            <p className="mt-20 font-semibold">Cool Cat</p>
            <p>
              Miaw!! Miaw!! Miaw!! Miaw!! Miaw!! Miaw!! Miaw!! Miaw!! Miaw!!
              Miaw!! Miaw!!
            </p>
            <button className="btn btn-primary w-full text-md">$500</button>
          </div>

          <div className="navbar justify-between shadow-xl rounded-xl">
            <div>
              <a className="neu p-2 rounded-md text-xl">LunaUI</a>
            </div>
            <div className="flex items-center gap-2">
              <a href="..." className="neu p-2 rounded-md text-primary">
                Menu
              </a>
              <a href="..." className="neu p-2 rounded-md text-primary">
                Menu
              </a>
              <a href="..." className="neu p-2 rounded-md text-primary">
                Menu
              </a>
              <a href="..." className="neu p-2 rounded-md text-primary">
                Menu
              </a>
              <a href="..." className="neu p-2 rounded-md text-primary">
                Menu
              </a>
            </div>
          </div>
        </div>
        {/* Alert */}
      </div>

      <div className=" rounded-2xl relative ">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-[32px] font-bold text-center text-[#293948] mb-5">
              Luna in other technologies
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-5">
          <OtherCard image={laravel} span="Laravel" />
          <OtherCard image={react} span="React" />
          <OtherCard image={vite} span="Vue" />
          <OtherCard image={next} span="NextJS" />
          <OtherCard image={nuxt} span="NuxtJS" />
          <OtherCard image={django} span="Django" />
        </div>

        {/* <div
          className="bg-gray-200 d-flex justify-content-center align-items-center  my-[50px]"
          style={{ marginBottom: "4px", height: "50px" }}
        >
          <p className="m-0">
            <span style={{ fontSize: "30px" }}>📢</span> Sponsor:
          </p>
        </div>
        <div className="bg-gray-200 flex justify-center items-center animate-bg-to-white mb-1 h-[200px]">
          <p>1</p>
        </div>
        <div className="grid grid-cols-6 gap-1">
          <div
            className="bg-gray-200 animate-bg-to-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            1
          </div>
          <div
            className="bg-gray-200 animate-bg-to-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            2
          </div>
          <div
            className="bg-gray-200 animate-bg-to-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            2
          </div>
          <div
            className="bg-gray-200 animate-bg-to-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            2
          </div>
          <div
            className="bg-gray-200 animate-bg-to-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            2
          </div>
          <div
            className="bg-gray-200 animate-bg-to-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            2
          </div>
          <div
            className="bg-gray-200 animate-bg-to-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            2
          </div>
          <div
            className="bg-gray-200 animate-bg-to-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            2
          </div>
          <div
            className="bg-gray-200 animate-bg-to-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            2
          </div>
          <div
            className="bg-gray-200 animate-bg-to-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            2
          </div>
          <div
            className="bg-gray-200 animate-bg-to-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            2
          </div>
          <div
            className="bg-gray-200 animate-bg-to-white d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            2
          </div>
        </div> */}
      </div>
      <div className="flex justify-center relative flex-wrap gap-5">
        <button className="btn btn-primary">Sponsore Me</button>
        <button className="btn btn-primary">Buy Me a coffee</button>
        <button className="btn btn-primary">Join For Contribute</button>
      </div>
    </Layout>
  );
};
