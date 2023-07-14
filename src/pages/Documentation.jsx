import React from "react";
import LayoutContent from "../LayoutContent";
//
import CodeSnippet from "../components/CodeSnippet";

const Documentation = () => {
  return (
    <LayoutContent>
      <h2 style={{ padding: "20px 0px", borderBottom: "2px solid #29292d" }}>
        Getting Started
      </h2>

      <p className="mb-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum non quam
        nemo doloribus possimus dolore totam itaque, voluptate repellendus
        soluta est, hic esse. Hic ab officia quam cupiditate id consequuntur
        numquam eius est. Pariatur adipisci error veniam placeat maiores nisi!
      </p>
      <CodeSnippet />
    </LayoutContent>
  );
};

export default Documentation;
