export const card = {
  ".card": {
    position: "relative",
    display: "flex",
    "flex-direction": "column",
    "border-radius": "1rem",
  },
  ".card figure": {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
  },
  ".card :where(figure:first-child)": {
    overflow: "hidden",
    "border-start-start-radius": "inherit",
    "border-start-end-radius": "inherit",
    "border-end-start-radius": "unset",
    "border-end-end-radius": "unset",
  },
  ".card :where(figure:last-child)": {
    overflow: "hidden",
    "border-start-start-radius": "unset",
    "border-start-end-radius": "unset",
    "border-end-start-radius": "inherit",
    "border-end-end-radius": "inherit",
  },
  "figure,p,pre": {
    margin: "0",
  },
  ".card-body": {
    display: "flex",
    flex: "1 1 auto",
    "flex-direction": "column",
    padding: "var(--padding-card, 2rem)",
    gap: "0.5rem",
  },
  ".card-title": {
    display: "flex",
    "align-items": "center",
    gap: "0.5rem",
    "font-size": "1.25rem",
    "line-height": "1.75rem",
    "font-weight": "600",
  },
  ".card-body :where(p)": {
    "flex-grow": "1",
  },
  ".card-actions": {
    display: "flex",
    "flex-wrap": "wrap",
    "align-items": "flex-start",
    gap: "0.5rem",
  },
};
