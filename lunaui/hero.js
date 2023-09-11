export const hero = {
  ".hero": {
    "--bg-hero": "255, 255, 255",
    display: "grid",
    "place-items": "center",
    "border-radius": "0.375rem",
    "background-color": "rgba(var(--bg-hero))",
  },
  ".hero-overlay": {
    "grid-column-start": "1",
    "grid-row-start": "1",
    height: "100%",
    width: "100%",
    "--bg-hero": "0, 0, 0",
    "background-color": "rgba(var(--bg-hero), 0.5)",
    border: "1px solid green",
  },
  ".hero-content": {
    "z-index": "0",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "max-width": "80rem",
    gap: "1rem",
    padding: "1rem",
  },
};
