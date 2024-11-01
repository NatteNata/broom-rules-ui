module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['@it-incubator/eslint-config'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
