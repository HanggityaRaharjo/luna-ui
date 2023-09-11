/** @type {import('tailwindcss').Config} */

import plugin from "./lunaui"; // Import your custom plugin

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {},
};
export const plugins = [plugin]; // Include your custom plugin in the plugins array
