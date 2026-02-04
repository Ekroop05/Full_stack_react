/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Keeps scanning React/JS files in src
    "./*.html",                    // 👈 NEW: Scans HTML files in the main folder (e.g. index.html)
    "./pages/**/*.html"            // 👈 NEW: (Optional) Scans HTML files in a 'pages' folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}