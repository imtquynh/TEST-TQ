// eslint-disable-next-line import/no-extraneous-dependencies
const {useBabelRc, override, adjustStyleLoaders} = require("customize-cra");

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc(), adjustStyleLoaders(({use: [, css, postcss]}) => {
    css.options.url = false;
    postcss.options.url = false;
}));
