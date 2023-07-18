import plugin from "tailwindcss/plugin";
import { base } from "./base";
import { button } from "./button";
import { color } from "./color";

export default plugin(({ addBase, addComponents, theme, addUtilities }) => {
  // Base Root
  addBase(base);
  // Button Components
  addComponents(button);
  // Text Components
  addComponents(button);
  addUtilities(color, ["responsive", "hover"]);
  addUtilities({
    ".modal": {
      display: "none",
    },
    ".modal-box": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem",
      backgroundColor: "red",
      borderRadius: "0.25rem",
    },
    ".modal-action": {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "1rem",
    },
    ".modal[open]": {
      display: "block",
    },
  });

  addComponents({
    ".dropdown": {
      position: "relative",
    },
    ".dropdown .dropdown-content": {
      display: "none",
      position: "absolute",
      zIndex: "1",
    },
    ".dropdown.open .dropdown-content": {
      display: "block",
    },
  });
});
