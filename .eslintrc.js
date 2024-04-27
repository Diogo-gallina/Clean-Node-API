module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off"
  },
}
