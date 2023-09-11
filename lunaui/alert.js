export const alert = {
  ".alert": {
    "--luna-alert-text-color": "#fff",
    "--luna-alert-bg-color": "transparent",
    "--luna-alert-border-color": "#fff",
    display: "grid",
    width: "100%",
    "grid-auto-flow": "column",
    "grid-template-columns": "auto minmax(auto, 1fr)",
    "justify-items": "start",
    "text-align": "left",
    gap: "1rem",
    "border-width": "1px",
    padding: "1rem",
    "border-radius": "1rem",
    "border-color": "var(--luna-alert-border-color)",
    color: "var(--luna-alert-text-color)",
    "background-color": "var(--luna-alert-bg-color)",
  },

  ".alert-info": {
    "--luna-alert-text-color": "var(--content-info)",
    "--luna-alert-bg-color": "rgb(var(--info))",
    "--luna-alert-border-color": "rgb(var(--info))",
  },

  ".alert-success": {
    "--luna-alert-text-color": "var(--content-success)",
    "--luna-alert-bg-color": "rgb(var(--success))",
    "--luna-alert-border-color": "rgb(var(--success))",
  },

  ".alert-warning": {
    "--luna-alert-text-color": "var(--content-warning)",
    "--luna-alert-bg-color": "rgb(var(--warning))",
    "--luna-alert-border-color": "rgb(var(--warning))",
  },

  ".alert-error": {
    "--luna-alert-text-color": "var(--content-error)",
    "--luna-alert-bg-color": "rgb(var(--error))",
    "--luna-alert-border-color": "rgb(var(--error))",
  },
};
