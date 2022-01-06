module.exports = {
    extends: [
        "react-app",
        "airbnb",
        "prettier"
    ],
    plugins: [
        "jsx-a11y",
        "prettier"
    ],
    rules: {
        // Off
        "react/jsx-props-no-spreading": "off",
        "react/state-in-constructor": "off",
        "react/static-property-placement": "off",
        "react/no-array-index-key": "off",
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        // Weak warning
        "no-case-declarations": 0,
        "no-nested-ternary": 0,
        "no-underscore-dangle": 0,
        "no-lonely-if": 0,
        "no-param-reassign": 0,
        "no-plusplus": 0,
        "prefer-template": 0,
        "object-shorthand": 0,
        "react-hooks/exhaustive-deps": 0,
        "react/forbid-prop-types": 0,
        "react/destructuring-assignment": 0,
        "react/no-access-state-in-setstate": 0,
        "import/order": 0,
        "import/no-mutable-exports": 0,
        "class-methods-use-this": 0,
        "import/prefer-default-export": 0,
        "no-prototype-builtins": 0,
        "import/no-named-as-default": 0,
        "global-require": 0,
        "max-classes-per-file": 0,
        "newline-per-chained-call": 0,
        "max-len": [0, {code: 80, ignorePattern: true}],
        // Warning
        "semi": 1,
        "no-console": 1,
        "max-statements-per-line": [1, {max: 2}],
        "operator-linebreak": [1, "before"],
        "no-unused-vars": [1, {"vars": "all", "args": "after-used"}],
        "react/jsx-filename-extension": [1, {extensions: [".js", ".jsx"]}],
        "quotes": [1, "double", { avoidEscape: true, allowTemplateLiterals: true}],
        // Error
        "import/no-cycle": "error",
        "no-useless-return": "error",
        "block-scoped-var": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "camelcase": "error",
        "prefer-const": "error",
        "no-dupe-else-if": "error",
        "no-duplicate-imports": "error",
        "lines-between-class-members": "error",
        "no-trailing-spaces": "error",
        "keyword-spacing": "error",
        "jsx-quotes": "error",
        "comma-style": "error",
        "comma-spacing": "error",
        "arrow-spacing": "error",
        "react/jsx-no-bind": [ "error", { allowBind: true, allowArrowFunctions: true}],
        "no-multi-spaces": ["error", {ignoreEOLComments: true, exceptions: {"ImportDeclaration": true}}],
        "no-use-before-define": ["error", {"functions": false, "classes": false, "variables": false}],
    },
    settings: {
        "import/resolver": {
            "babel-plugin-root-import": {
                "rootPathSuffix": "./src",
                "rootPathPrefix": "src"
            }
        }
    }
};
