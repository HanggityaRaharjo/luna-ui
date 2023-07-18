/** @type {import('tailwindcss').Config} */

import myPlugin from "./lunaui";
import plugin from "tailwindcss/plugin";

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {},
};
export const plugins = [myPlugin];
