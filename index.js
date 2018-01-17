module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order', // https://github.com/ream88/stylelint-config-idiomatic-order/issues/5
    'stylelint-config-sass-guidelines',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-selector-bem-pattern',
    'stylelint-declaration-strict-value',
  ],
  rules: {
    // -------------------------------------------------------------------------
    // SCSS Support ------------------------------------------------------------
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // Until: https://github.com/bjankord/stylelint-config-sass-guidelines/issues/18
    'at-rule-empty-line-before': ['always', {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested',
      ],
      ignore: ['after-comment'],
      ignoreAtRules: ['else'],
    }],
    'scss/at-else-empty-line-before': ['never'],
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['if', 'else'],
    }],
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',

    // -------------------------------------------------------------------------
    // BEM support -------------------------------------------------------------
    'plugin/selector-bem-pattern': { preset: 'bem' },
    'selector-class-pattern': '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]' +
    '+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]' +
    '+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
    // From: https://github.com/simonsmith/stylelint-selector-bem-pattern/issues/23

    // -------------------------------------------------------------------------
    // Angular support ---------------------------------------------------------
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['ng-deep'] }],

    // -------------------------------------------------------------------------
    // Properties order --------------------------------------------------------
    'order/properties-alphabetical-order': null,

    // -------------------------------------------------------------------------
    // Code style --------------------------------------------------------------
    indentation: [2, { indentClosingBrace: false }],
    'block-no-empty': null,
    'declaration-colon-newline-after': null,
    'declaration-no-important': true, // Prohibit !important
    'function-parentheses-space-inside': 'never-single-line',
    'scale-unlimited/declaration-strict-value': [
      '/color/', // Enforce use of variables for colors
      { ignoreKeywords: ['inherit'] },
    ],
    'max-nesting-depth': 4, // Prohibit excessive nesting
  },
}
