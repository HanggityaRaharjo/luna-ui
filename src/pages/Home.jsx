import { useState } from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Home = () => {
  const [countScroll, setCountScroll] = useState(0);
  window.addEventListener("scroll", function () {
    setCountScroll(this.scrollY);
  });

  return (
    <Layout>
      <div className="mt-20 mb-[80px] flex justify-between items-center">
        {/* Kiri */}
        <div className="w-1/2" style={{ lineHeight: 1 }}>
          <p className="text-logo text-[64px] font-bold">LUNA UI</p>
          <p className="font-56 text-[64px] font-semibold">Component UI</p>
          <p
            className="font-56 text-[64px] font-semibold"
            style={{ marginBottom: "1.5rem" }}
          >
            {" "}
            For TailwindCSS
          </p>

          <p className="fw-700 text-[20px] text-[#9999a0] mb-12">
            Copy the code & paste it to your project
          </p>

          <div className="flex gap-[15px] items-center">
            <Link
              to={"/docs/install"}
              className="btn btn-primary flex items-center"
            >
              Get Started
            </Link>
            <Link className="btn flex items-center">Theme</Link>
          </div>
        </div>

        {/* Kanan */}
        <div className="w-1/2 relative flex justify-center items-center">
          <div
            className="blur-[56px] bg-gradient-to-tl from-[#bd34fe] from-50% to-[#47caff] to-50% absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 rounded-full w-80 h-80"
            style={{
              top: `calc(50% + ${countScroll}px)`,
              left: `calc(50% - ${countScroll / 2}px)`,
            }}
          ></div>
          <img src={Logo} height={"180px"} alt="" className="relative" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 relative">
        <div className="bg-gray-200 rounded-lg p-4">
          <div className="bg-dk rounded-lg mb-2 h-10 w-10 p-[2px]">
            <img src="icon/easy-icon.svg" style={{ width: "100%" }} alt="" />
          </div>
          <p className="font-semibold">Easy to use</p>
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            inventore .
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <div className="bg-dk rounded-lg mb-2 h-10 w-10 p-[2px]">
            <img src="icon/easy-icon.svg" style={{ width: "100%" }} alt="" />
          </div>
          <p className="font-semibold">Easy to use</p>
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            inventore .
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <div className="bg-dk rounded-lg mb-2 h-10 w-10 p-[2px]">
            <img src="icon/easy-icon.svg" style={{ width: "100%" }} alt="" />
          </div>
          <p className="font-semibold">Easy to use</p>
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            inventore .
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <div className="bg-dk rounded-lg mb-2 h-10 w-10 p-[2px]">
            <img src="icon/easy-icon.svg" style={{ width: "100%" }} alt="" />
          </div>
          <p className="font-semibold">Easy to use</p>
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            inventore .
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <div className="bg-dk rounded-lg mb-2 h-10 w-10 p-[2px]">
            <img src="icon/easy-icon.svg" style={{ width: "100%" }} alt="" />
          </div>
          <p className="font-semibold">Easy to use</p>
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            inventore .
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <div className="bg-dk rounded-lg mb-2 h-10 w-10 p-[2px]">
            <img src="icon/easy-icon.svg" style={{ width: "100%" }} alt="" />
          </div>
          <p className="font-semibold">Easy to use</p>
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            inventore .
          </p>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl relative my-[50px] ">
        <div className="bg-gray-200 flex justify-center items-center mb-1 h-[50px]">
          <p>
            <span className="text-[30px]">🙌</span> Thanks To :
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1 mb-1">
          <div className="bg-gray-200 animate-bg-to-white flex justify-center items-center h-[150px]">
            1
          </div>
          <div className="bg-gray-200 animate-bg-to-white flex justify-center items-center h-[150px]">
            2
          </div>
          <div className="bg-gray-200 animate-bg-to-white flex justify-center items-center h-[150px]">
            3
          </div>
        </div>

        <div
          className="bg-gray-200 d-flex justify-content-center align-items-center "
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
        </div>
      </div>
      <div className="flex justify-center relative gap-5">
        <button className="btn-outline-wn">Sponsore Me</button>
        <button className="btn-outline-wn">Buy Me a coffee</button>
      </div>
    </Layout>
  );
};
