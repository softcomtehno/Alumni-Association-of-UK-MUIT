/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    fontFamily: {
      serif: ["Geologica", "serif"],
      sans: ["Geologica", "serif"],
    },
    colors: {
      primary: "#2563EB",
      blue: "#0589c7",
      green: "#72c200",
      sun: "#faa918",
      yellow: "#ffc715",
      red: "#d33131",
      cinnabar: "#e53838",
      alto: " #cfcfcf",
      dove: "#6f6f6f",
      tundora: " #4c4c4c",
      white: "white",
      black: "black",
      violet: "#8f95cd",
      milk: "#fe98c8",
      tandaBtnBg: "#005B50",
      tandaColor: "#1F1F1F",
      tandaTestBg: "rgb(245, 245, 245)",
      TandaBg: "rgb(255, 255, 255)",
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
    screens: {
      "r-xl": {
        max: "1440px",
      },
      "r-lg": {
        max: "1024px",
      },
      "r-md": {
        max: "768px",
      },
      "r-sm": {
        max: "480px",
      },
      "r-xs": {
        max: "360px",
      },
      "m-xl": {
        min: "1440px",
      },
      "m-lg": {
        min: "1024px",
      },
      "m-md": {
        min: "768px",
      },
      "m-sm": {
        min: "480px",
      },
      "m-xs": {
        min: "360px",
      },
      "t-xl": {
        max: "1170px",
      },
      "t-lg": {
        max: "1075px",
      },
      "t-m": {
        max: "900px",
      },
      "t-md": {
        max: "640px",
      },
      "t-x": {
        max: "530px",
      },
      "t-sm": {
        max: "430px",
      },
      "t-xs": {
        max: "380px",
      },
    },
    plugins: [],
  },
  plugins: [require("tailwindcss-animate")],
};
