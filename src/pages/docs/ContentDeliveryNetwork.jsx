import { Link } from "react-router-dom";
import LayoutContent from "../../LayoutContent";
import CodeSnippet from "../../components/CodeSnippet";

const ContentDeliveryNetwork = () => {
  return (
    <LayoutContent>
      {/* Title */}
      <div className=" relative border-b-2 border-gray-200 mb-4 py-2 group">
        <div className="absolute -left-12 text-transparent group-hover:text-[#646cff] transition-all duration-300">
          <span className="text-5xl">#</span>
        </div>
        <h2 className="text-[30px] font-bold ">Use LUNAUI from CDN</h2>
      </div>
      {/* End Title */}
      {/* Tab */}
      <div className="border-b-2 border-gray-200 flex mb-4 h-12">
        <Link
          to={"/docs/install"}
          className="w-32 translate-y-[2px] h-10 flex justify-center items-center border border-transparent group"
        >
          <p className="group-hover:text-[#646cff]">Tailwind Plugin</p>
        </Link>

        <Link
          to={"/docs/cdn"}
          className="w-32 bg-neutral border-2 border-[#29292d] border-b-0 rounded-t-lg translate-y-[2px] flex justify-center items-center "
        >
          <div className="text-white">Use CDN</div>
        </Link>
      </div>
      {/* End Tab */}
      <p className="mb-4">
        You don't need to install anything. Just add one of these to the head
        tag of your HTML:
      </p>
      <div className="alert alert-warning mb-4">
        <svg className="w-6 h-6 fill-transparent stroke-current stroke-2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        <span>
          CDN files are not recommended for production because you can't purge
          unused styles and file size will be large.
        </span>
      </div>

      <CodeSnippet
        className="rounded-[10px] mb-4"
        type={"html"}
        code={`<link href="https://cdn.jsdelivr.net/npm/daisyui@3.2.1/dist/full.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com"></script>`}
      />
      <CodeSnippet
        className="rounded-[10px]"
        type={"html"}
        code={`<!doctype html>
<html lang="en">
  <head>
    <title>INFENTRA | UI</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@3.2.1/dist/full.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
      . . .
  </body>
</html>
        `}
      />
    </LayoutContent>
  );
};

export default ContentDeliveryNetwork;
