/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [],
  theme: {
    colors: {
      ...colors,
      main: "#007bff",
      secondary: "#ff4500",
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    fontFamily: {
      openS: "'Open Sans', sans-serif",
    },
  },
  plugins: [],
}

/* @mixin respond($breakpoint) {
  @if $breakpoint == smallest {
    @media only screen and (max-width: 30em) {
      @content;
    } //480px
  }
  @if $breakpoint == phone {
    @media only screen and (max-width: 43.75em) {
      @content;
    } //700px
  }
  @if $breakpoint == tab-port {
    @media only screen and (max-width: 57.5em) {
      @content;
    } //920px
  }
  @if $breakpoint == tab-land {
    @media only screen and (max-width: 78em) {
      @content;
    } //1248px
  }
  @if $breakpoint == big-desktop {
    @media only screen and (min-width: 120em) {
      @content;
    } //1920px
  }
} */