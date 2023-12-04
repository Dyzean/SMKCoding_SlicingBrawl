module.exports = {
  root: true,
  parserOptions: {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  extends: [
    "plugin:tailwindcss/recommended"
  ],
  plugins: [
    "tailwindcss"
  ],
  rules: {
    "quotes": ["error", "double"],
    "no-multi-spaces": "error",
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/no-contradicting-classname": "error"
  },
  overrides: [{
    files: ["*.html"],
    parser: "@angular-eslint/template-parser",
    rules: {
      "no-multi-spaces": "error",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/no-contradicting-classname": "error",
    },
  },
  ],
};
