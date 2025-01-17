// The line below tells the code editor that this file is a Tailwind CSS configuration object:
/** @type {import('tailwindcss').Config} */

// This is the configuration file for Tailwind CSS
// It specifies which files Tailwind should scan for class names, customizes the theme, and allows adding plugins

module.exports = {
  // Specify which files Tailwind should scan for class names to generate only the necessary CSS
  content: [
    './templates/**/*.twig', // Include all twig templates in the 'templates' folder and subfolders
    './src/**/*.{html,js}', // Include all html and js files in the 'src/' folder and subfolders
  ],
  
  // Customise the default theme or add additional styles
  theme: {
    // Use this to add or override Tailwind's default styles
    extend: {},
  },

  // Add plugins here to extend Tailwind's functionality (eg, forms, typography, etc)
  plugins: [],
};