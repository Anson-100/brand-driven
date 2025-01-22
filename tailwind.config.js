/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans both folders
  presets: [require("nativewind/preset")], // NativeWind-specific preset
  theme: {
    extend: {},
  },
  plugins: [],
}
