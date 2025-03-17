import flypeng from '@flypeng/eslint-config';

export default [
  ...flypeng(),
  {
    rules: {
      'no-console': 'off',
      camelcase: 'off',
      'no-return-await': 'off',
    },
  },
  {
    rules: {
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
    },
  },
  {
    ignores: ['.vitepress/cache', '.vitepress/dist'],
  },
];
