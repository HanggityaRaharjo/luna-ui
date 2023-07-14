import { useState } from "react";
import Layout from "../Layout";

export const Home = () => {
  const [countScroll, setCountScroll] = useState(0);
  window.addEventListener("scroll", function () {
    console.log(this.scrollY);
    setCountScroll(this.scrollY);
  });

  return (
    <Layout>
      <div
        className="d-flex justify-content-between align-items-center "
        style={{ marginTop: "40px", marginBottom: "50px" }}
      >
        {/* Kiri */}
        <div className="w-50" style={{ lineHeight: 1 }}>
          <p
            className="text-logo m-0"
            style={{
              fontSize: "56px",
              fontWeight: "700",
            }}
          >
            CBXUI
          </p>
          <p className="font-56 m-0 fw-700 ">Libray UI</p>
          <p className="font-56 m-0 fw-700 mb-4"> For Cubex Styling</p>

          <p
            className="fw-700 mb-5"
            style={{ fontSize: "20px", color: "#9999a0" }}
          >
            Copy the code & paste it to your project
          </p>

          <div className="d-flex" style={{ gap: "15px" }}>
            <button className="btn-pm">Get Started</button>
            <button className="btn-sc">Css Generator</button>
            <button className="btn-sc">Cubex Website</button>
          </div>
        </div>

        {/* Kanan */}
        <div className="w-50 position-relative d-flex justify-content-center align-items-center">
          <div
            id="bg-blur"
            style={{
              width: "300px",
              height: "300px",
              background: "linear-gradient( -45deg, #bd34fe 50%, #47caff 50% )",
              filter: "blur(56px)",
              borderRadius: "100%",
              position: "absolute",
              top: "50%",
              left: `50%`,
              transform: `translate(-50%,-50%)`,
            }}
          ></div>
          <img
            src="logo.png"
            height={"180px"}
            alt=""
            style={{ position: "relative" }}
          />
        </div>
      </div>
      <div
        class="row g-3 position-relative"
        style={{ paddingBottom: "50px", borderBottom: "3px solid black" }}
      >
        <div class="col-md-4">
          <div className="bg-sc rounded-lg p-md">
            <div
              className="bg-dk rounded-lg mb-2"
              style={{ width: "40px", height: "40px", padding: "2px" }}
            >
              <img src="icon/easy-icon.svg" style={{ width: "100%" }} alt="" />
            </div>
            <p>Easy to use</p>
            <p style={{ fontSize: "13px", color: "#9c9ca3" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              inventore .
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div className="bg-sc rounded-lg p-md">
            <div
              className="bg-dk rounded-lg mb-2"
              style={{ width: "40px", height: "40px", padding: "2px" }}
            >
              <img src="icon/easy-icon.svg" style={{ width: "100%" }} alt="" />
            </div>
            <p>Easy to use</p>
            <p style={{ fontSize: "13px", color: "#9c9ca3" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              inventore .
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div className="bg-sc rounded-lg p-md">
            <div
              className="bg-dk rounded-lg mb-2"
              style={{ width: "40px", height: "40px", padding: "2px" }}
            >
              <img src="icon/easy-icon.svg" style={{ width: "100%" }} alt="" />
            </div>
            <p>Easy to use</p>
            <p style={{ fontSize: "13px", color: "#9c9ca3" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              inventore .
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div className="bg-sc rounded-lg p-md">
            <div
              className="bg-dk rounded-lg mb-2"
              style={{ width: "40px", height: "40px", padding: "2px" }}
            >
              <img src="icon/easy-icon.svg" style={{ width: "100%" }} alt="" />
            </div>
            <p>Easy to use</p>
            <p style={{ fontSize: "13px", color: "#9c9ca3" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              inventore .
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div className="bg-sc rounded-lg p-md">
            <div
              className="bg-dk rounded-lg mb-2"
              style={{ width: "40px", height: "40px", padding: "2px" }}
            >
              <img src="icon/easy-icon.svg" style={{ width: "100%" }} alt="" />
            </div>
            <p>Easy to use</p>
            <p style={{ fontSize: "13px", color: "#9c9ca3" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              inventore .
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div className="bg-sc rounded-lg p-md">
            <div
              className="bg-dk rounded-lg mb-2"
              style={{ width: "40px", height: "40px", padding: "2px" }}
            >
              <img src="icon/easy-icon.svg" style={{ width: "100%" }} alt="" />
            </div>
            <p>Easy to use</p>
            <p style={{ fontSize: "13px", color: "#9c9ca3" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              inventore .
            </p>
          </div>
        </div>
      </div>
      <div
        className="overflow-hidden rounded-2xl"
        style={{ marginTop: "50px", marginBottom: "50px", color: "#8999a0" }}
      >
        <div
          className="bg-sc d-flex justify-content-center align-items-center"
          style={{ marginBottom: "4px", height: "50px" }}
        >
          <p className="m-0">
            <span style={{ fontSize: "30px" }}>🙌</span> Thanks To :
          </p>
        </div>
        <div class="row g-1" style={{ marginBottom: "4px" }}>
          <div className="col-md-4 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "150px" }}
            >
              1
            </div>
          </div>
          <div className="col-md-4 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "150px" }}
            >
              2
            </div>
          </div>
          <div className="col-md-4 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "150px" }}
            >
              3
            </div>
          </div>
        </div>
        <div
          className="bg-sc d-flex justify-content-center align-items-center "
          style={{ marginBottom: "4px", height: "50px" }}
        >
          <p className="m-0">
            <span style={{ fontSize: "30px" }}>📢</span> Sponsor:
          </p>
        </div>
        <div
          className="bg-sc d-flex justify-content-center align-items-center animate-bg-to-white"
          style={{ marginBottom: "4px", height: "200px" }}
        >
          <p className="m-0">1</p>
        </div>
        <div class="row g-1">
          <div className="col-md-2 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              1
            </div>
          </div>
          <div className="col-md-2 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              2
            </div>
          </div>
          <div className="col-md-2 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              3
            </div>
          </div>
          <div className="col-md-2 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              4
            </div>
          </div>
          <div className="col-md-2 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              5
            </div>
          </div>
          <div className="col-md-2 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              6
            </div>
          </div>
          <div className="col-md-2 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              7
            </div>
          </div>
          <div className="col-md-2 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              8
            </div>
          </div>
          <div className="col-md-2 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              9
            </div>
          </div>
          <div className="col-md-2 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              10
            </div>
          </div>
          <div className="col-md-2 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              11
            </div>
          </div>
          <div className="col-md-2 ">
            <div
              className="bg-sc animate-bg-to-white d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              12
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ gap: "20px", color: "#8999a0" }}
      >
        <button className="btn-outline-wn">Sponsore Me</button>
        <button className="btn-outline-wn">Buy Me a coffee</button>
      </div>
    </Layout>
  );
};
