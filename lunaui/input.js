export const input = {
  ".input": {
    "--border-color": "255, 255, 255",
    "--border-opacity": "0",
    "--border-width": "1px",
    "--input-bg-default": "255, 255, 255",
    "--input-bg-opacity": "1",
    "flex-shrink": "1",
    height: "3rem",
    "padding-left": "1rem",
    "padding-right": "1rem",
    "font-size": "1rem",
    "line-height": "2",
    "border-width": "var(--border-width)",
    "border-color": "rgba(var(--border-color), var(--border-opacity))",
    "background-color":
      "rgba(var(--input-bg-default), var(--input-bg-opacity))",
    "border-radius": "0.5rem",
  },
  ".input:focus": {
    "outline-style": "solid",
    "outline-width": "2px",
    "outline-offset": "2px",
    "outline-color": "rgba(0, 0, 0, 0.2)",
  },
  ".input.input-bordered": {
    "--border-color": "0, 0, 0",
    "--border-opacity": "0.2",
    "--border-width": "1px",
    "--input-bg-default": "255, 255, 255",
    "--input-bg-opacity": "1",
  },

  ".input.input-bordered.input-primary": {
    "--border-color": "var(--primary)",
    "--border-opacity": "1",
    "--border-width": "1px",
    "--input-bg-default": "255, 255, 255",
    "--input-bg-opacity": "1",
  },
  ".input.input-bordered.input-primary:focus": {
    "outline-style": "solid",
    "outline-width": "2px",
    "outline-offset": "2px",
    "outline-color": "rgba(var(--primary), 0.2)",
  },

  ".input.input-bordered.input-secondary": {
    "--border-color": "var(--secondary)",
    "--border-opacity": "1",
    "--border-width": "1px",
    "--input-bg-default": "255, 255, 255",
    "--input-bg-opacity": "1",
  },
  ".input.input-bordered.input-secondary:focus": {
    "outline-style": "solid",
    "outline-width": "2px",
    "outline-offset": "2px",
    "outline-color": "rgba(var(--secondary), 0.2)",
  },

  ".input.input-bordered.input-accent": {
    "--border-color": "var(--accent)",
    "--border-opacity": "1",
    "--border-width": "1px",
    "--input-bg-default": "255, 255, 255",
    "--input-bg-opacity": "1",
  },
  ".input.input-bordered.input-accent:focus": {
    "outline-style": "solid",
    "outline-width": "2px",
    "outline-offset": "2px",
    "outline-color": "rgba(var(--accent), 0.2)",
  },

  ".input.input-bordered.input-info": {
    "--border-color": "var(--info)",
    "--border-opacity": "1",
    "--border-width": "1px",
    "--input-bg-default": "255, 255, 255",
    "--input-bg-opacity": "1",
  },
  ".input.input-bordered.input-info:focus": {
    "outline-style": "solid",
    "outline-width": "2px",
    "outline-offset": "2px",
    "outline-color": "rgba(var(--info), 0.2)",
  },

  ".input.input-bordered.input-success": {
    "--border-color": "var(--success)",
    "--border-opacity": "1",
    "--border-width": "1px",
    "--input-bg-default": "255, 255, 255",
    "--input-bg-opacity": "1",
  },
  ".input.input-bordered.input-success:focus": {
    "outline-style": "solid",
    "outline-width": "2px",
    "outline-offset": "2px",
    "outline-color": "rgba(var(--success), 0.2)",
  },

  ".input.input-bordered.input-warning": {
    "--border-color": "var(--warning)",
    "--border-opacity": "1",
    "--border-width": "1px",
    "--input-bg-default": "255, 255, 255",
    "--input-bg-opacity": "1",
  },
  ".input.input-bordered.input-warning:focus": {
    "outline-style": "solid",
    "outline-width": "2px",
    "outline-offset": "2px",
    "outline-color": "rgba(var(--warning), 0.2)",
  },

  ".input.input-bordered.input-error": {
    "--border-color": "var(--error)",
    "--border-opacity": "1",
    "--border-width": "1px",
    "--input-bg-default": "255, 255, 255",
    "--input-bg-opacity": "1",
  },
  ".input.input-bordered.input-error:focus": {
    "outline-style": "solid",
    "outline-width": "2px",
    "outline-offset": "2px",
    "outline-color": "rgba(var(--error), 0.2)",
  },
};
