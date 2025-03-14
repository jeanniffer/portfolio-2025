/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        serif: ["Fraunces", "serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      fontVariationSettings: {
        instrument: { wdth: "100" },
        fraunces: { SOFT: "0", WONK: "0" },
      },
      colors: {
        primary: "#ffffff",
        secondary: "rgba(255, 255, 255, 0.06)",
        accent: "#DEEF66",
        background: "#14162C",
        text: "#ffffff",
      },
    },
  },
  plugins: [],
};
