// eslint.config.mjs
import flypeng from '@flypeng/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...flypeng(),
    {
        rules: {
            'no-console': 'off',
            camelcase: 'off',
            'no-return-await': 'off',
            'import/prefer-default-export': 'off',
            'import/extensions': 'off',
            'vue/multi-word-component-names': 'off',
        },
    },
    {
        ignores: ['.vitepress/cache', '.vitepress/dist', '**/*.md'],
    },
];
