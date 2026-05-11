import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          500: "#3b5bfd",
          600: "#2f49cc"
        }
      }
    }
  },
  plugins: []
} satisfies Config;