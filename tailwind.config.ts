import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0B1220",
        panel: "#111C2E",
        surface: "#17243A",
        "surface-hover": "#1E2F4C",
        "surface-border": "#1E293B",
        primary: {
          DEFAULT: "#10B981",
          hover: "#059669",
          muted: "rgba(16, 185, 129, 0.15)",
        },
        cyan: {
          DEFAULT: "#38BDF8",
          hover: "#0EA5E9",
          muted: "rgba(56, 189, 248, 0.15)",
        },
        amber: {
          DEFAULT: "#F59E0B",
          hover: "#D97706",
          muted: "rgba(245, 158, 11, 0.15)",
        },
        red: {
          DEFAULT: "#F87171",
          hover: "#EF4444",
          muted: "rgba(248, 113, 113, 0.15)",
        },
        text: {
          main: "#F8FAFC",
          muted: "#94A3B8",
          dim: "#64748B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
