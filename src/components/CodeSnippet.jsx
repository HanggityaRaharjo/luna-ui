import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = () => {
  const code = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Title</title>
    </head>
    <body>
        ...
      <script src="main.jsx"></script>
    </body>
  </html>
  `;

  const customStyle = {
    ...dracula,
    'pre[class*="language-"]': {
      background: "#252529",
    },
    tag: {
      color: "red", // Ganti warna tag menjadi putih
    },
  };

  return (
    <SyntaxHighlighter language="html" style={customStyle}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
