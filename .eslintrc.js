module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  overrides: [],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "max-len": ["error", { code: 100, tabWidth: 4 }],
  },
};
