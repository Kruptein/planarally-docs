import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['**/*.d.ts', '**/coverage', '**/dist'] },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        languageOptions: {
            ecmaVersion: 'latest',
            globals: globals.browser,
            sourceType: 'module',
            parserOptions: {
                parser: tseslint.parser,
            }
        },
        rules: {
            "vue/html-indent": 0,
            "vue/html-self-closing": 0,
            "vue/max-attributes-per-line": 0,
        },
    },
    eslintConfigPrettier
);