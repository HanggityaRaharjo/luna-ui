import { Link } from "react-router-dom";
import LayoutContent from "../../LayoutContent";
import CodeSnippet from "../../components/CodeSnippet";

const IntallPage = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group">
        <div className="absolute -left-12 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">
          Install LUNA UI as a Tailwind CSS plugin?
        </h2>
      </div>
      {/* End Title */}
      {/* Tab */}
      <div className="border-b-2 border-gray-200 flex mb-4 h-12">
        <Link
          to={"/docs/install"}
          className="w-32 bg-neutral border-2 border-[#29292d] border-b-0 rounded-t-lg translate-y-[2px] flex justify-center items-center "
        >
          <p className="text-white">Tailwind Plugin</p>
        </Link>

        <Link
          to={"/docs/cdn"}
          className="w-32 translate-y-[2px] h-10 flex justify-center items-center border border-transparent group"
        >
          <div className="group-hover:text-[#646cff]">Use CDN</div>
        </Link>
      </div>
      {/* End Tab */}
      <p className="mb-4">
        You need{" "}
        <a
          href="https://nodejs.org/en"
          target="_blank"
          className="text-[#646cff]"
        >
          <span className="text-[#646cff]">Node.js</span>
        </a>{" "}
        and{" "}
        <a href="https://tailwindcss.com/docs/installation" target="_blank">
          <span className="text-[#646cff]"> Tailwind CSS</span>
        </a>{" "}
        installed.
      </p>
      <p className="mb-4">1. Install LUNAUI:</p>
      <div className="mb-4">
        <CodeSnippet
          type={"terminal"}
          code={`npm install lunaui-css`}
          className="rounded-[10px]"
        />
      </div>
      <div className="mb-4">
        <CodeSnippet
          type={"terminal"}
          code={`yarn add lunaui-css`}
          className="rounded-[10px]"
        />
      </div>
      <p className="mb-4">
        2. Then add LUNAUI to your tailwind.config.js files:
      </p>
      <div className="mb-4">
        <CodeSnippet
          className="rounded-[10px]"
          type={"javascript"}
          code={`module.exports = {
  //...
  plugins:[require("lunaui-css")],
}`}
        />
      </div>
      <p className="font-semibold text-2xl mb-4">
        <span className="">#</span>LUNAUI Example Repositories
      </p>
      <div className="grid grid-cols-4 gap-5">
        {/* Next JS */}
        <div className="rounded-md p-5 bg-gray-200 hover:scale-105 transition duration-200 cursor-pointer">
          <div>
            <svg
              width="96"
              height="96"
              className="aspect-square w-full h-auto"
              role="img"
              viewBox="0 0 180 180"
            >
              <mask
                height="180"
                id=":R0:mask0_408_134"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
                width="180"
                x="0"
                y="0"
              >
                <circle cx="90" cy="90" fill="black" r="90"></circle>
              </mask>
              <g mask="url(#:R0:mask0_408_134)">
                <circle
                  cx="90"
                  cy="90"
                  data-circle="true"
                  fill="black"
                  r="90"
                ></circle>
                <path
                  d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                  fill="url(#:R0:paint0_linear_408_134)"
                ></path>
                <rect
                  fill="url(#:R0:paint1_linear_408_134)"
                  height="72"
                  width="12"
                  x="115"
                  y="54"
                ></rect>
              </g>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id=":R0:paint0_linear_408_134"
                  x1="109"
                  x2="144.5"
                  y1="116.5"
                  y2="160.5"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id=":R0:paint1_linear_408_134"
                  x1="121"
                  x2="120.799"
                  y1="54"
                  y2="106.875"
                >
                  <stop stopColor="white"></stop>
                  <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="text-center font-semibold">NextJS</p>
        </div>

        {/* SVELTE */}
        <div className="rounded-md p-5 bg-gray-200 hover:scale-105 transition duration-200 cursor-pointer">
          <div>
            <svg
              width="96"
              height="96"
              className="aspect-square w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-26 0 308 308"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <g xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M239.681566,40.706757 C211.113272,-0.181889366 154.69089,-12.301439 113.894816,13.6910393 L42.2469062,59.3555354 C22.6760042,71.6680028 9.1958152,91.6538543 5.11196889,114.412133 C1.69420521,133.371174 4.6982178,152.928576 13.6483951,169.987905 C7.51549676,179.291145 3.33259428,189.7413 1.3524912,200.706787 C-2.77083771,223.902098 2.62286977,247.780539 16.3159596,266.951444 C44.8902975,307.843936 101.312954,319.958266 142.10271,293.967161 L213.75062,248.302665 C233.322905,235.991626 246.803553,216.005094 250.885557,193.246067 C254.302867,174.287249 251.30121,154.730228 242.355449,137.668922 C248.486748,128.365895 252.667894,117.916162 254.646134,106.951413 C258.772188,83.7560394 253.378243,59.8765465 239.682665,40.706757"
                  fill="#FF3E00"
                ></path>
                <path
                  d="M106.888658,270.841265 C83.7871855,276.848065 59.3915045,267.805346 45.7864111,248.192566 C37.5477583,236.66102 34.3023491,222.296573 36.7830958,208.343155 C37.1989333,206.075414 37.7711933,203.839165 38.4957755,201.650433 L39.845476,197.534835 L43.5173097,200.231763 C51.9971301,206.462491 61.4784803,211.199728 71.5527203,214.239302 L74.2164003,215.047419 L73.9710252,217.705878 C73.6455499,221.487851 74.6696022,225.262925 76.8616703,228.361972 C80.9560313,234.269749 88.3011363,236.995968 95.2584831,235.190159 C96.8160691,234.773852 98.3006859,234.121384 99.6606718,233.25546 L171.331634,187.582718 C174.877468,185.349963 177.321139,181.729229 178.065299,177.605596 C178.808171,173.400048 177.830501,169.072361 175.351884,165.594581 C171.255076,159.685578 163.908134,156.9582 156.947927,158.762547 C155.392392,159.178888 153.90975,159.83088 152.551509,160.695872 L125.202489,178.130144 C120.705281,180.989558 115.797437,183.144784 110.64897,184.521162 C87.547692,190.527609 63.1523949,181.484801 49.5475471,161.872188 C41.3085624,150.340895 38.0631179,135.976391 40.5442317,122.023052 C43.0002744,108.333716 51.1099574,96.3125326 62.8835328,88.9089537 L134.548175,43.2323647 C139.047294,40.3682559 143.958644,38.21032 149.111311,36.8336525 C172.21244,30.8273594 196.607527,39.8700206 210.212459,59.4823515 C218.451112,71.013898 221.696522,85.3783452 219.215775,99.3317627 C218.798144,101.59911 218.225915,103.835236 217.503095,106.024485 L216.153395,110.140083 L212.483484,107.447276 C204.004261,101.212984 194.522,96.4735732 184.44615,93.4336926 L181.78247,92.6253012 L182.027845,89.9668419 C182.350522,86.1852063 181.326723,82.4111645 179.1372,79.3110228 C175.042839,73.4032457 167.697734,70.677026 160.740387,72.4828355 C159.182801,72.8991426 157.698185,73.5516104 156.338199,74.4175344 L84.6672364,120.0922 C81.1218886,122.323199 78.6795938,125.943704 77.9387928,130.066574 C77.1913232,134.271925 78.1673502,138.601163 80.6469865,142.078963 C84.7438467,147.987899 92.0907405,150.71526 99.0509435,148.910997 C100.608143,148.493836 102.092543,147.841423 103.452857,146.976298 L130.798305,129.548621 C135.293566,126.685437 140.201191,124.528302 145.350175,123.152382 C168.451453,117.145935 192.846751,126.188743 206.451598,145.801356 C214.690583,157.332649 217.936027,171.697153 215.454914,185.650492 C212.997261,199.340539 204.888162,211.362752 193.115613,218.769811 L121.450695,264.442553 C116.951576,267.306662 112.040226,269.464598 106.887559,270.841265"
                  fill="#FFFFFF"
                ></path>
              </g>
            </svg>
          </div>
          <p className="text-center font-semibold">SvelteKit</p>
        </div>

        {/* NUXT */}
        <div className="rounded-md p-5 bg-gray-200 hover:scale-105 transition duration-200 cursor-pointer">
          <div>
            <svg
              width="96"
              height="96"
              className="aspect-square w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 900 900"
              fill="none"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M504.908 750H839.476C850.103 750.001 860.542 747.229 869.745 741.963C878.948 736.696 886.589 729.121 891.9 719.999C897.211 710.876 900.005 700.529 900 689.997C899.995 679.465 897.193 669.12 891.873 660.002L667.187 274.289C661.876 265.169 654.237 257.595 645.036 252.329C635.835 247.064 625.398 244.291 614.773 244.291C604.149 244.291 593.711 247.064 584.511 252.329C575.31 257.595 567.67 265.169 562.36 274.289L504.908 372.979L392.581 179.993C387.266 170.874 379.623 163.301 370.42 158.036C361.216 152.772 350.777 150 340.151 150C329.525 150 319.086 152.772 309.883 158.036C300.679 163.301 293.036 170.874 287.721 179.993L8.12649 660.002C2.80743 669.12 0.00462935 679.465 5.72978e-06 689.997C-0.00461789 700.529 2.78909 710.876 8.10015 719.999C13.4112 729.121 21.0523 736.696 30.255 741.963C39.4576 747.229 49.8973 750.001 60.524 750H270.538C353.748 750 415.112 713.775 457.336 643.101L559.849 467.145L614.757 372.979L779.547 655.834H559.849L504.908 750ZM267.114 655.737L120.551 655.704L340.249 278.586L449.87 467.145L376.474 593.175C348.433 639.03 316.577 655.737 267.114 655.737Z"
                fill="#00DC82"
              ></path>
            </svg>
          </div>
          <p className="text-center font-semibold">Nuxt 3</p>
        </div>

        {/* ASTRO */}
        <div className="rounded-md p-5 bg-gray-200 hover:scale-105 transition duration-200 cursor-pointer">
          <div>
            <svg
              width="96"
              height="96"
              className="aspect-square w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <title xmlns="http://www.w3.org/2000/svg">file_type_astro</title>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M5.9,18.847a7.507,7.507,0,0,0-.572,2.624,3.265,3.265,0,0,0,.551,1.553,7.427,7.427,0,0,0,2.093,1.681L13.1,28.119A7.332,7.332,0,0,0,15.2,29.287a3.239,3.239,0,0,0,1.5,0,7.381,7.381,0,0,0,2.117-1.16L24,24.711a7.512,7.512,0,0,0,2.117-1.688,3.241,3.241,0,0,0,.55-1.563,7.515,7.515,0,0,0-.587-2.643L21.547,4.551a3.973,3.973,0,0,0-.54-1.3,1.733,1.733,0,0,0-.7-.51,3.972,3.972,0,0,0-1.4-.122H13.005a3.932,3.932,0,0,0-1.4.125,1.713,1.713,0,0,0-.7.512,3.94,3.94,0,0,0-.535,1.3L5.9,18.848Zm13.24-13.2a3.329,3.329,0,0,1,.441,1.093l3.892,12.784a16.168,16.168,0,0,0-4.653-1.573L16.291,9.391a.331.331,0,0,0-.513-.169.323.323,0,0,0-.119.169l-2.5,8.557a16.14,16.14,0,0,0-4.674,1.579L12.393,6.743a3.281,3.281,0,0,1,.442-1.094,1.458,1.458,0,0,1,.582-.43,3.31,3.31,0,0,1,1.175-.1h2.793a3.314,3.314,0,0,1,1.176.1,1.454,1.454,0,0,1,.583.432ZM16.127,21.06a5.551,5.551,0,0,0,3.4-.923,2.8,2.8,0,0,1-.207,2.182A3.938,3.938,0,0,1,17.773,23.8c-.674.428-1.254.8-1.254,1.787a2.079,2.079,0,0,0,.209.914,2.49,2.49,0,0,1-1.535-2.3v-.061c0-.683,0-1.524-.962-1.524a1.028,1.028,0,0,0-.391.077,1.021,1.021,0,0,0-.552.551,1.03,1.03,0,0,0-.079.391,3.769,3.769,0,0,1-.988-2.644,4.206,4.206,0,0,1,.175-1.248c.4.757,1.92,1.32,3.731,1.32Z"
                style={{ fill: "#ff5d01", fillRule: "evenodd" }}
              ></path>
            </svg>
          </div>
          <p className="text-center font-semibold">Astro</p>
        </div>

        {/* VUE */}
        <div className="rounded-md p-5 bg-gray-200 hover:scale-105 transition duration-200 cursor-pointer">
          <div>
            <svg
              width="96"
              height="96"
              className="aspect-square w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <title xmlns="http://www.w3.org/2000/svg">file_type_vue</title>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M24.4,3.925H30L16,28.075,2,3.925H12.71L16,9.525l3.22-5.6Z"
                style={{ fill: "#41b883" }}
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M2,3.925l14,24.15L30,3.925H24.4L16,18.415,7.53,3.925Z"
                style={{ fill: "#41b883" }}
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M7.53,3.925,16,18.485l8.4-14.56H19.22L16,9.525l-3.29-5.6Z"
                style={{ fill: "#35495e" }}
              ></path>
            </svg>
          </div>
          <p className="text-center font-semibold">VueJS 3</p>
        </div>
      </div>
    </LayoutContent>
  );
};

export default IntallPage;
