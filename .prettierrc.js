const prettierconfig = {
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: true,
  printWidth: 200,
  proseWrap: 'preserve',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 500,
      },
    },
  ],
}

module.exports = prettierconfig
