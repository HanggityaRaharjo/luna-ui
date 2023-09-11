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
    <div
      className={` ${bgColor} ${txtColor} rounded-lg p-4 bg-opacity-50 backdrop-blur-sm`}
    >
      {icon}
      <div className="bg-dk rounded-lg mb-2 h-10 w-10 p-[2px]">
        <img src={image} alt="" className="h-10" />
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function OtherCard(props) {
  return (
    <div className="bg-white bg-opacity-50 backdrop-blur-sm flex justify-center items-center h-[150px] border border-gray-200 rounded-md hover:shadow-md ">
      <div>
        <div className="flex justify-center">
          <img src={props.image} alt="" className="h-10" />
        </div>
        <p className="text-center">{props.span}</p>
      </div>
    </div>
  );
}

export const Home = () => {
  const [countScroll, setCountScroll] = useState(0);
  window.addEventListener("scroll", function () {
    setCountScroll(this.scrollY);
  });

  return (
    <Layout>
      <div className="lg:mt-20 lg:mb-[80px] mb-10 flex justify-between items-center ">
        {/* Kiri */}
        <div
          className="lg:w-1/2 w-full relative  lg:block flex flex-col justify-center items-center"
          style={{ lineHeight: 1 }}
        >
          <p className="text-logo text-[64px] font-bold">LUNA UI</p>
          <div className="lg:text-[64px] text-[40px] mb-5">
            <p className="">Component UI</p>
            <p className="lg:mb-6">For TailwindCSS</p>
          </div>

          <p className="fw-700 lg:text-[20px] text-[#9999a0] lg:mb-12 mb-5">
            Copy the code & paste it to your project
          </p>

          <div className="flex gap-[15px] items-center">
            <Link
              to={"/docs/install"}
              className="btn btn-primary flex items-center"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Kanan */}
        <div className="lg:w-1/2 relative lg:flex justify-center items-center hidden">
          <div
            className="blur-[56px] bg-gradient-to-tl from-[#bd34fe] from-50% to-[#47caff] to-50% absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 rounded-full w-80 h-80"
            style={{
              top: `calc(50% + ${countScroll}px)`,
              left: `calc(50% - ${countScroll / 2}px)`,
            }}
          ></div>
          {/* <img src={Logo} height={"180px"} alt="" className="relative" /> */}
          <p className="text-logo text-[80px] text-red-500 font-bold relative ">
            LUNA UI
          </p>
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

      <div className="relative mb-10">
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
        {/* Alert */}
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-1 mb-1">
          <div className="hover:shadow-md bg-white rounded-md bg-opacity-40 backdrop-blur-sm">
            <div className="bg-gray-100 h-8 flex items-center justify-between border-b border-b-gray-200 rounded-t-md p-2">
              <h3 className="px-2">Alert</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
            <div className="border border-gray-100  h-[200px] rounded-b-md">
              <div className="flex justify-center items-center h-full">
                <div>
                  <div className="bg-gray-200 h-5  rounded-md flex items-center p-2 w-40">
                    <div className="bg-blue-500 h-1 w-36" />
                  </div>
                  <div className="bg-gray-200 h-5  rounded-md flex items-center justify-between p-2 w-40 my-1">
                    <div className="bg-blue-500 h-1 w-14" />
                    <div className="text-xs text-blue-500 -mt-1">x</div>
                  </div>
                  <div className="bg-gray-200 h-5  rounded-md flex items-center justify-between p-2 w-40 my-1">
                    <div className="bg-blue-500 h-1 w-20" />
                    <div className="text-xs text-blue-500 -mt-1">x</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <div className="hover:shadow-md bg-white rounded-md bg-opacity-40 backdrop-blur-sm">
            <div className="bg-gray-100 h-8 flex items-center justify-between border-b border-b-gray-200 rounded-t-md p-2">
              <h3 className="px-2">Navbar</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
            <div className="border border-gray-100  h-[200px] rounded-b-md">
              <div className="flex justify-center items-center h-full">
                <div className="bg-gray-200 h-8 w-3/4 rounded-sm flex justify-between items-center p-2">
                  <div className="bg-gray-400 h-2 w-6 rounded-sm" />
                  <div className="flex gap-1">
                    <div className="bg-gray-400 h-1 w-4" />
                    <div className="bg-gray-400 h-1 w-4" />
                    <div className="bg-gray-400 h-1 w-4" />
                    <div className="bg-gray-400 h-1 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="hover:shadow-md bg-white rounded-md h-auto bg-opacity-40 backdrop-blur-sm">
            <div className="bg-gray-100 h-8 flex items-center justify-between border-b border-b-gray-200 rounded-t-md p-2">
              <h3 className="px-2">Cards</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
            <div className="border border-gray-100  h-[200px] rounded-b-md">
              <div className="flex justify-center items-center h-full">
                <div className="bg-gray-200 rounded-md flex items-center p-2 w-32">
                  <div>
                    <div className="bg-gray-400 h-20 w-28" />
                    <div className="bg-gray-400 h-[10px] w-10 mt-2" />
                    <div className="bg-gray-400 h-1 w-24 mt-1" />
                    <div className="bg-gray-400 h-1 w-24 mt-1" />
                    <div className="mt-2 flex justify-end">
                      <div className="bg-gray-400 h-2 w-8 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="hover:shadow-md bg-white rounded-md h-auto bg-opacity-40 backdrop-blur-sm">
            <div className="bg-gray-100 h-8 flex items-center  justify-between border-b border-b-gray-200 rounded-t-md p-2">
              <h3 className="px-2">Badge</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
            <div className="border border-gray-100  h-[200px] rounded-b-md">
              <div className="flex justify-center items-center h-full">
                <div className="bg-gray-200 rounded-md flex items-center p-2 w-32 relative">
                  <div className="bg-gray-300 h-5 w-28" />
                  <div>
                    <div className="bg-blue-500 h-3 w-3 rounded-xl absolute -top-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modals */}
          <div className="hover:shadow-md bg-white rounded-md h-auto bg-opacity-40 backdrop-blur-sm">
            <div className="bg-gray-100 h-8 flex items-center justify-between border-b border-b-gray-200 rounded-t-md p-2">
              <h3 className="px-2">Modals</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
            <div className="border border-gray-100  h-[200px] rounded-b-md">
              <div className="flex justify-center items-center h-full">
                <div className=" w-40 h-24 border border-gray-100 bg-gray-200 ">
                  <div className="border-b border-gray-300  h-4 flex  justify-between items-center p-2">
                    <div className="bg-gray-300 h-1 w-20 mt-1" />
                    <div className="text-[10px] text-gray-400">x</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-5">
                      <div className="bg-gray-300 h-1 w-32 mt-1" />
                      <div className="bg-gray-300 h-1 w-32 mt-1" />
                      <div className="bg-gray-300 h-1 w-20 mt-1" />
                    </div>
                  </div>
                  <div className="flex justify-end  gap-1 p-2">
                    <div className="bg-blue-500 h-3 w-8 rounded-sm mt-1" />
                    <div className="bg-gray-300 h-3 w-8 rounded-sm mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="hover:shadow-md bg-white rounded-md h-auto bg-opacity-40 backdrop-blur-sm">
            <div className="bg-gray-100 h-8 flex items-center justify-between border-b border-b-gray-200 rounded-t-md p-2">
              <h3 className="px-2">Footer</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
            <div className="border border-gray-100  h-[200px] rounded-b-md">
              <div className="flex justify-center items-center h-full">
                <div className=" w-52 h-14 bg-gray-200 ">
                  <div className="flex justify-between items-center h-6 p-2">
                    <div className="bg-gray-400 h-3 w-10 rounded-md" />
                    <div className="flex justify-between gap-1">
                      <div className="bg-gray-400 h-2 w-6 rounded-sm" />
                      <div className="bg-gray-400 h-2 w-6 rounded-sm" />
                      <div className="bg-gray-400 h-2 w-6 rounded-sm" />
                    </div>
                  </div>
                  <div className=" flex justify-center mt-1">
                    <div className="h-[1px] w-44 bg-gray-500" />
                  </div>
                  <div className=" flex justify-center gap-1 mt-4">
                    <div className="h-[1px] w-3 bg-gray-500" />
                    <div className="h-[1px] w-20 bg-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" rounded-2xl relative ">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-[32px] font-bold text-center mb-5">
              Luna in other technologies
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-5">
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
      <div className="flex justify-center relative gap-5">
        <button className="btn">Sponsore Me</button>
        <button className="btn">Buy Me a coffee</button>
        <button className="btn">Join For Contribute</button>
      </div>
    </Layout>
  );
};
