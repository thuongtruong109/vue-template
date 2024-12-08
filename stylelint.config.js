/** @type {import('stylelint').Config} */

export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'],
      },
    ],
    'no-descending-specificity': null,
    'alpha-value-notation': 'number',
    'custom-property-empty-line-before': 'never',
    'color-function-notation': null,
    'media-feature-range-notation': null,
    'declaration-empty-line-before': null,
    'selector-pseudo-element-colon-notation': null,
  },
}
