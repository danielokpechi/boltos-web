// See postcss/index.cjs: keeps the Astro site's cascade in CSS Modules.
module.exports = {
  plugins: ['postcss-astro-specificity'],
};
