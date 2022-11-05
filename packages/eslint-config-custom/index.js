// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['@gz/eslint-config-vue'],
  rules: {
    // '@typescript-eslint/ban-ts-comment': 'off',
    // 'comma-dangle': [
    //   'error',
    //   'always-multiline',
    // ],
    // 'import/order': [
    //   'error',
    //   {
    //     'newlines-between': 'always',
    //     pathGroupsExcludedImportTypes: ['vue'],
    //     groups: [
    //       'builtin',
    //       'external',
    //       'internal',
    //       'parent',
    //       'sibling',
    //       'index',
    //     ],
    //     pathGroups: [
    //       {
    //         pattern: '@ui/**',
    //         group: 'internal',
    //         position: 'before',
    //       },
    //     ],
    //   },
    // ],
    // 'vue/component-tags-order': [
    //   'error',
    //   {
    //     order: ['script', 'template', 'style'],
    //   },
    // ],
    // 'vue/no-multiple-template-root': 'off',
    // 'vue/require-default-prop': 'off',
    // 'vue/no-v-html': 'off',
    // 'vue/no-v-for-template-key': 'off',
    // 'vue/multi-word-component-names': 'off',
    // 'vue/no-v-model-argument': 'off',
    // 'vue/singleline-html-element-content-newline': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
    // 'brace-style': 'off',
    // 'no-lonely-if': 'off',
    // 'symbol-description': 'off',
    // 'import/namespace': 'off',
    // 'no-console': 'off',
    // 'import/no-duplicates': 'off',
    // 'import/first': 'off',
    // 'no-redeclare': 'off',
    // 'import/order': 'off',
  },
  ignorePatterns: ['**/*.json', 'dist', 'node_modules', '.turbo', '.nuxt', 'public', '.output', '!.storybook', 'cypress'],
})
