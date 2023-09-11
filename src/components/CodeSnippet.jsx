import React from "react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ code, type, className }) => {
  const [statusCopy, setStatusCopy] = useState(false);
  const [isShowCode, setIsShowCode] = useState(false);
  const customStyle = {
    ...dracula,
    'pre[class*="language-"]': {
      background: "rgb(30, 31, 56)",
      padding: type == "terminal" ? "0px" : "30px 10px 10px 10px", // Atur padding "30px 10px 10px 10px"
      borderRadius: "10px",
      margin: "0",
      fontSize: "14px",
      overflow: "auto",
    },
    tag: {
      color: "#f66", // Ganti warna tag menjadi putih
    },
    "attr-value": {
      color: "#a5e844", // Ganti warna value attribute menjadi merah
    },
    "attr-name": {
      color: "#ffcb6b", // Ganti warna attribute tag menjadi merah
    },
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setStatusCopy(true);
      setTimeout(() => {
        setStatusCopy(false);
      }, 2000);
    } catch (error) {
      console.error("Gagal menyalin teks ke clipboard:", error);
    }
  };
  return (
    <>
      <div
        className={`relative  bg-neutral overflow-hidden  transition-all duration-300 ${className}`}
        style={{
          maxHeight:
            isShowCode || type == "terminal" || type == "javascript"
              ? "1000px"
              : "0px",
        }}
      >
        <div className="p-[10px] border-2 border-[#29292d] relative">
          <SyntaxHighlighter language={type} style={customStyle}>
            {code}
          </SyntaxHighlighter>
          <button
            className="absolute top-[5px] flex p-[5px] items-center right-[5px] bg-transparent border-[1px] border-[#646cff] rounded-[10px]"
            onClick={copyToClipboard}
          >
            <span className="text-[12px] text-white">
              {statusCopy ? "Copy to clipboard" : "Copy"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-primary w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
              />
            </svg>
          </button>
        </div>
      </div>
      {type != "terminal" && type !== "javascript" ? (
        <div className="flex justify-center bg-[#f3f6f9] border-2 border-t-0 rounded-b-[10px] border-[#dbdee5] p-2">
          <button
            className="btn text-white p-2 rounded-md"
            onClick={() => setIsShowCode(!isShowCode)}
          >
            {isShowCode ? "Hide" : "Show"} Code
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CodeSnippet;
