module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
   "react/react-in-jsx-scope": "off",
   "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
   "react/prop-types": "off",
   "react/jsx-props-no-spreading": "off",
   "arrow-body-style": "off",
  },
  extends: ["next", "next/core-web-vitals", 'plugin:react/recommended', 'airbnb', 'prettier'],
  plugins: ['react', 'prettier']
};