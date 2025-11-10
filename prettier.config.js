// @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  printWidth: 120,
  plugins: ['prettier-plugin-astro']
};

export default config;
