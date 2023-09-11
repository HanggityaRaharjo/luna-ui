export const button = {
  ".btn": {
    "--btn-color": "255,255,255",
    "--btn-bg": "rgb(var(--default))",
    "--btn-border-color": "rgb(var(--default))",
    "--btn-hover-bg": "rgba(var(--default), 0.5)",
    "--btn-hover-border-color": "rgb(var(--default))",
    display: "inline-flex",
    "align-items": "center",
    "justify-content": "center",
    "text-transform": "uppercase",
    "border-width": "1px",
    "border-color": "var(--btn-border-color)",
    height: "fit-content",
    "min-height": "1.5rem",
    "min-width": "1.5rem",
    width: "fit-content",
    "border-radius": "0.5rem",
    "background-color": "var(--btn-bg)",
    "font-weight": "500",
    "font-size": "0.875rem",
    "line-height": "1.25rem",
    transition: "background, transform, border 0.2s",
    color: "rgb(var(--btn-color))",
    "padding-left": "1.25rem",
    "padding-right": "1.25rem",
    "padding-top": "0.625rem",
    "padding-bottom": "0.625rem",
    gap: "5px",
  },
  ".btn:hover": {
    "background-color": "var(--btn-hover-bg)",
    transition: "background 0.3s",
    "border-color": "transparent",
  },
  ".btn:active": {
    transform: "scale(95%)",
    transition: `background,
      transform 0.5s`,
  },
  ".btn-primary": {
    "--btn-color": "var(--content-primary)",
    "--btn-bg": "rgb(var(--primary))",
    "--btn-border-color": "rgb(var(--primary))",
    "--btn-hover-bg": "rgba(var(--primary), 0.5)",
    "--btn-hover-border-color": "rgb(var(--primary))",
  },

  ".btn-secondary": {
    "--btn-color": "var(--content-secondary)",
    "--btn-bg": "rgb(var(--secondary))",
    "--btn-border-color": "rgb(var(--secondary))",
    "--btn-hover-bg": "rgba(var(--secondary), 0.5)",
    "--btn-hover-border-color": "rgb(var(--secondary))",
  },

  ".btn-accent": {
    "--btn-color": "var(--content-accent)",
    "--btn-bg": "rgb(var(--accent))",
    "--btn-border-color": "rgb(var(--accent))",
    "--btn-hover-bg": "rgba(var(--accent), 0.5)",
    "--btn-hover-border-color": "rgb(var(--accent))",
  },

  ".btn-success": {
    "--btn-color": "var(--content-success)",
    "--btn-bg": "rgb(var(--success))",
    "--btn-border-color": "rgb(var(--success))",
    "--btn-hover-bg": "rgba(var(--success), 0.5)",
    "--btn-hover-border-color": "rgb(var(--success))",
  },

  ".btn-info": {
    "--btn-color": "var(--content-info)",
    "--btn-bg": "rgb(var(--info))",
    "--btn-border-color": "rgb(var(--info))",
    "--btn-hover-bg": "rgba(var(--info), 0.5)",
    "--btn-hover-border-color": "rgb(var(--info))",
  },

  ".btn-warning": {
    "--btn-color": "var(--content-warning)",
    "--btn-bg": "rgb(var(--warning))",
    "--btn-border-color": "rgb(var(--warning))",
    "--btn-hover-bg": "rgba(var(--warning), 0.5)",
    "--btn-hover-border-color": "rgb(var(--warning))",
  },

  ".btn-error": {
    "--btn-color": "var(--content-error)",
    "--btn-bg": "rgb(var(--error))",
    "--btn-border-color": "rgb(var(--error))",
    "--btn-hover-bg": "rgba(var(--error), 0.5)",
    "--btn-hover-border-color": "rgb(var(--error))",
  },

  ".btn-light": {
    "--btn-color": "var(--content-light)",
    "--btn-bg": "rgb(var(--light))",
    "--btn-border-color": "rgb(var(--light))",
    "--btn-hover-bg": "rgba(var(--light), 0.5)",
    "--btn-hover-border-color": "rgb(var(--light))",
  },

  ".btn-outline": {
    "border-color": "var(--btn-bg)",
    "background-color": "transparent",
    color: "var(--btn-bg)",
  },
  ".btn-lg": {
    "padding-left": "1.5rem",
    "padding-right": "1.5rem",
    "min-height": "3.5rem",
    "font-size": "1.125rem",
  },
  ".btn-sm": {
    "padding-left": "1rem",
    "padding-right": "1rem",
    "min-width": "4rem",
    "min-height": "1.25rem",
    "font-size": "11px",
  },
  ".btn-wide": {
    "min-width": "16rem",
  },
};
