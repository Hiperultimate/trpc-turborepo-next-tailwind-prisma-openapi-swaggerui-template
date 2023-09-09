module.exports = {
  semi: true,
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: false,
  printWidth: 110,
  plugins: [
    /**
     * **NOTE** tailwind plugin must come last!
     * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
     */
    "prettier-plugin-tailwindcss",
  ],
};
