import css from '@eslint/css'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'
import checkFile from 'eslint-plugin-check-file'
import { tailwind4 } from 'tailwind-csstree'
import withNuxt from './.nuxt/eslint.config.mjs'

const sourceFiles = ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue}']
const namedFiles = [
  '*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue,css,json,md,html,svg,png,ico}',
  '{app,server,tests,public}/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue,css,json,md,html,svg,png,ico}',
]

export default withNuxt(
  {
    ignores: [
      '.husky/_/**',
      '.idea/**',
      '.nuxt/**',
      '.output/**',
      'coverage/**',
      'dist/**',
      'node_modules/**',
      'package-lock.json',
      'playwright-report/**',
      'test-results/**',
    ],
  },
  {
    files: ['**/*.{html,svg,png,ico}'],
    plugins: {
      'check-file': checkFile,
    },
    processor: 'check-file/eslint-processor-check-file',
  },
  {
    files: namedFiles,
    ignores: [
      'AGENTS.md',
      'README.md',
      'app/app.vue',
      'app/{layouts,pages}/**/*.vue',
    ],
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.vue': 'PASCAL_CASE',
          '**/*.{jsx,tsx}': 'KEBAB_CASE',
          '*.{js,mjs,cjs,ts,mts,cts,css,json,md,html,svg,png,ico}': 'KEBAB_CASE',
          '{app,server,tests,public}/**/*.{js,mjs,cjs,ts,mts,cts,css,json,md,html,svg,png,ico}': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'app/**/': 'KEBAB_CASE',
          'public/**/': 'KEBAB_CASE',
          'server/**/': 'KEBAB_CASE',
          'tests/**/': 'KEBAB_CASE',
        },
      ],
    },
  },
  {
    files: ['app/{layouts,pages}/**/*.vue'],
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          'app/{layouts,pages}/**/*.vue': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
    },
  },
  {
    ...betterTailwindcss.configs['recommended-error'],
    files: sourceFiles,
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/assets/css/main.css',
      },
    },
    rules: {
      ...betterTailwindcss.configs['recommended-error'].rules,
      'better-tailwindcss/enforce-consistent-important-position': 'error',
      'better-tailwindcss/enforce-consistent-line-wrapping': [
        'error',
        {
          printWidth: 120,
        },
      ],
      'better-tailwindcss/enforce-consistent-variable-syntax': 'error',
      'better-tailwindcss/enforce-consistent-variant-order': 'error',
      'better-tailwindcss/enforce-logical-properties': 'error',
      'better-tailwindcss/enforce-shorthand-classes': 'error',
    },
  },
  ...markdown.configs.recommended,
  {
    files: ['**/*.css'],
    language: 'css/css',
    languageOptions: {
      customSyntax: tailwind4,
    },
    plugins: { css },
    rules: {
      ...css.configs.recommended.rules,
      'css/no-important': 'off',
      'css/no-invalid-properties': 'off',
    },
  },
  {
    files: ['**/*.json'],
    language: 'json/json',
    plugins: { json },
    rules: json.configs.recommended.rules,
  },
  {
    files: ['tsconfig*.json'],
    language: 'json/jsonc',
    plugins: { json },
    rules: json.configs.recommended.rules,
  },
).override('nuxt/javascript', {
  files: sourceFiles,
})
