/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#3498db",    // Blue - innovation, technology
          secondary: "#2ecc71",  // Green - growth, volunteering
          background: "#f5f9fc", // Light blue-white - clean, professional
          accent: "#e74c3c",     // Red-orange - achievements, CTAs
          textPrimary: "#2c3e50", // Dark blue - professional
          textSecondary: "#7f8c8d", // Gray - secondary information
        },
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          'roboto': ['Roboto', 'sans-serif'],
          'poppins': ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }