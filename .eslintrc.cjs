module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["airbnb", "airbnb/hooks", "airbnb-typescript"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-absolute-path": "off",
    "linebreak-style": "off",
    "object-curly-newline": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
