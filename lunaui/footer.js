export const footer = {
  "@media (min-width: 48rem) .footer": {
    "grid-auto-flow": "column",
  },
  ".footer": {
    display: "grid",
    width: "100%",
    "grid-auto-flow": "column",
    "place-items": "start",
    "row-gap": "2.5rem",
    "column-gap": "1rem",
    "font-size": "0.875rem",
    "line-height": "1.25rem",
  },
  ".footer > *": {
    display: "grid",
    "place-items": "start",
    gap: "0.5rem",
  },
  ".footer-title": {
    "margin-bottom": "0.5rem",
    "font-weight": "700",
    "text-transform": "uppercase",
    opacity: "0.5",
  },
};
