import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        xp: {
          "title-from": "var(--xp-title-from)",
          "title-to": "var(--xp-title-to)",
          border: "var(--xp-border)",
          face: "var(--xp-face)",
          "face-raised": "var(--xp-face-raised)",
          "face-dark": "var(--xp-face-dark)",
          "taskbar-from": "var(--xp-taskbar-from)",
          "taskbar-to": "var(--xp-taskbar-to)",
          "start-from": "var(--xp-start-from)",
          "start-to": "var(--xp-start-to)",
          link: "var(--xp-link)",
          text: "var(--xp-text)",
          "text-muted": "var(--xp-text-muted)",
          "selected-from": "var(--xp-selected-from)",
          "selected-to": "var(--xp-selected-to)",
        },
      },
      fontFamily: {
        "chakra-petch": ["var(--font-chakra-petch)", "sans-serif"],
        tahoma: ["Tahoma", "Verdana", '"Segoe UI"', "sans-serif"],
        "source-sans": ["var(--font-source-sans)", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
