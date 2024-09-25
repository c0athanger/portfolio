/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trnasparent: 'transparent',
        current: 'currentColor',
        "whitealt": "#e6f1ff",
        "navy": "#0a192f",
        "nav": "rgba(10, 25, 47, 0.85)",
        "navy-shadow": "rgba(2,12,27,0.7)",
        "lightest-navy": "#233554",
        "dark-slate": "#495670",
        "slate": "#8892b0",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
        "white": "#e6f1ff",
        "green": "#64ffda",
        "green-tint": "rgba(100,255,218,0.1)",
        "pink": "#f57dff",
        "blue": "#57cbff",
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
    plugins: [],
  }
}
