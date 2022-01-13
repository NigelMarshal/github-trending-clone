module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.625rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        "gh-gray-900": "#161b22",
        "gh-gray-800": "#0d1117",
        "gh-gray-700": "#21262d",
        "gh-white": "#f0f6fc",
        "gh-gray-500": "#c9d1d9",
        "gh-gray-100": "#8b949e",
        "gh-border": "#30363d",
        "gh-light-blue": "#1f6feb",
        "gh-orange": "#c06a08",
      },
    },
  },
  plugins: [],
};
