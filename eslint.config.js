import flypeng from '@flypeng/eslint-config';

export default [
  ...flypeng(),
  {
    ignores: ['.vitepress/cache', '.vitepress/dist'],
  },
];
