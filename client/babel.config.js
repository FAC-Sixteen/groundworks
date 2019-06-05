module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"], // enabling babel to work with env and React
  plugins: ["@babel/plugin-proposal-class-properties"], // Doesn't work without.

  env: { development: { compact: false } } //minor error without. Has to do with CSS. Hides the error. Only shows error in development.
};
