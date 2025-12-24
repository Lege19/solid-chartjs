import { defineConfig, globalIgnores } from 'eslint/config'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import solid from 'eslint-plugin-solid/configs/recommended'
import js from '@eslint/js'
import globals from 'globals'

export default defineConfig([
    js.configs.recommended,
    solid,
    globalIgnores(['node_modules', 'dist', 'tsup.config.ts', '.publish']),
    {
        plugins: {
            '@typescript-eslint': typescriptEslint,
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 5,
            sourceType: 'module',

            parserOptions: {
                project: 'tsconfig.json',
            },
            globals: globals.browser,
        },

        rules: {
            'prefer-const': 'warn',
            'no-console': 'warn',
            'no-debugger': 'warn',

            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],

            '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
            '@typescript-eslint/no-unnecessary-condition': 'warn',
            '@typescript-eslint/no-useless-empty-export': 'warn',
        },
    },
])
