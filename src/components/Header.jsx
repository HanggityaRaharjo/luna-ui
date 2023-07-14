import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{
        height: "60px",
        width: "100%",
        position: "fixed",
        background: "#1e1e20",
        maxWidth: "1092px",
        padding: "0px 40px",
      }}
    >
      <div>
        <div
          className="d-flex align-items-center justify-content-around"
          style={{
            height: "35px",
            background: "#161618",
            color: "#8f8f96",
            width: "160px",
            borderRadius: "4px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={"20px"}
            height={"20px"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <p className="m-0" style={{ fontSize: "14px" }}>
            Search
          </p>
          <p
            className="m-0"
            style={{
              borderRadius: "5px",
              padding: "0px 5px",
              border: "1px solid #29292d",
            }}
          >
            CTRLK
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center" style={{ gap: "10px" }}>
        <div
          className="d-flex align-items-center"
          style={{
            gap: "10px",
            borderRight: "2px solid #9999a0",
            padding: "0px 16px",
          }}
        >
          <p className="m-0" style={{ fontSize: "14px" }}>
            Documentation
          </p>
          <p className="m-0" style={{ fontSize: "14px" }}>
            Guide
          </p>
          <p className="m-0" style={{ fontSize: "14px" }}>
            Config
          </p>
          <p className="m-0" style={{ fontSize: "14px" }}>
            Version
          </p>
        </div>
        <div className="d-flex" style={{ gap: "8px" }}>
          <a href="" style={{ color: "#9999a0" }}>
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              className="animate-color-to-white"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>discord_fill</title>{" "}
                <g
                  id="页面-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g id="Logo" transform="translate(-480.000000, -144.000000)">
                    {" "}
                    <g
                      id="discord_fill"
                      transform="translate(480.000000, 144.000000)"
                    >
                      {" "}
                      <path
                        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                        id="MingCute"
                        fill-rule="nonzero"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M15.0031,4 C15.74742,4 16.532444,4.2597504 17.2533144,4.5466496 L17.7803,4.76328 L17.7803,4.76328 C19.0402,5.29134 19.7484,6.39876 20.2975,7.61613 C21.1882,9.59078 21.8067,12.2238 22.0209,14.2256 C22.1227,15.1766 22.1483,16.1321 21.9647,16.7747 C21.76838,17.46166 21.0975,17.947788 20.4466008,18.3303128 L20.1251058,18.5133917 L20.1251058,18.5133917 L19.7907,18.6986 C19.61865,18.794725 19.442175,18.8900812 19.2660703,18.9830547 L18.7436625,19.2532125 L18.7436625,19.2532125 L18.0271553,19.610458 L18.0271553,19.610458 L17.4503,19.8944 L17.4503,19.8944 C16.9564,20.1414 16.3557,19.9412 16.1087,19.4472 C15.8617,18.9532 16.0619,18.3526 16.5559,18.1056 L17.3469,17.7158 L17.3469,17.7158 L16.7663,17.1071 C15.3765,17.6777 13.7389,18 12.0001,18 C10.2612,18 8.6236,17.6777 7.23378,17.1071 L6.65415,17.7148 L7.44727,18.1056 L7.44727,18.1056 C7.94124,18.3526 8.14147,18.9532 7.89448,19.4472 C7.64749,19.9412 7.04682,20.1414 6.55284,19.8944 L6.00922,19.6247 C5.60650667,19.4255667 5.20386444,19.2265222 4.80574963,19.0185 L3.87804989,18.5133917 L3.87804989,18.5133917 L3.55657432,18.3303128 C2.9057004,17.947788 2.234774,17.46166 2.03851,16.7747 C1.85493,16.1321 1.88051,15.1766 1.98227,14.2256 C2.19645,12.2238 2.81496,9.59078 3.70567,7.61613 C4.25479,6.39877 4.96296,5.29134 6.22289,4.76328 C7.05903,4.41284 8.07171,4 9.00004,4 C9.60303,4 10.0767,4.55523 9.98927,5.14727 C10.6366,5.05075 11.3099,5 12.0001,5 C12.6914,5 13.3657,5.05091 14.014,5.14774 C13.9263,4.55557 14.4,4 15.0031,4 Z M8.75006,10.5 C7.78356,10.5 7.00006,11.2835 7.00006,12.25 C7.00006,13.2165 7.78356,14 8.75006,14 C9.71656,14 10.5001,13.2165 10.5001,12.25 C10.5001,11.2835 9.71656,10.5 8.75006,10.5 Z M15.2501,10.5 C14.2836,10.5 13.5001,11.2835 13.5001,12.25 C13.5001,13.2165 14.2836,14 15.2501,14 C16.2166,14 17.0001,13.2165 17.0001,12.25 C17.0001,11.2835 16.2166,10.5 15.2501,10.5 Z"
                        id="形状"
                        fill="currentColor"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
          <a href="" style={{ color: "#9999a0" }}>
            <svg
              width="19px"
              height="19px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              className="animate-color-to-white"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>github [#142]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="currentColor"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
