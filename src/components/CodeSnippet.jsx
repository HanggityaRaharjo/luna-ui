import React from "react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  oneLight,
  duotoneForest,
  duotoneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ code, type, className }) => {
  const [statusCopy, setStatusCopy] = useState(false);
  const [isShowCode, setIsShowCode] = useState(false);
  const customStyle = {
    ...duotoneLight,
    background: "transparent",
    'pre[class*="language-"]': {
      background: "#e9edf0",
      padding: type == "terminal" ? "0px" : "30px 10px 10px 10px", // Atur padding "30px 10px 10px 10px"
      borderRadius: "10px",
      margin: "0",
      fontSize: "14px",
      overflow: "auto",
      color: "red",
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
        className={`relative  bg-[#e9edf0] overflow-hidden  transition-all duration-300 ${className}`}
        style={{
          maxHeight:
            isShowCode || type == "terminal" || type == "javascript"
              ? "1000px"
              : "0px",
        }}
      >
        <div className="p-[20px] neu-active relative">
          <SyntaxHighlighter language={type} style={customStyle}>
            {code}
          </SyntaxHighlighter>
          <button
            className="absolute top-[5px] flex p-[5px] items-center right-[5px] neu rounded-[10px]"
            onClick={copyToClipboard}
          >
            <span className="text-[12px]">
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
        <div className="flex justify-center bg-[#e9edf0] border-2 border-t-0 rounded-b-[10px] border-[#dbdee5] neu-active p-2">
          <button
            className="neu p-2 rounded-md text-primary font-semibold flex items-center"
            onClick={() => setIsShowCode(!isShowCode)}
          >
            {isShowCode ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}
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
