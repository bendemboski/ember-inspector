module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  globals: {
    basicContext: false
  },
  rules: {
    'ember/no-jquery': 'error',

    // Temporarily turn these off
    'ember/avoid-leaking-state-in-ember-objects': 'off',
    'ember/no-observers': 'off',
    'ember/use-brace-expansion': 'off'
  },
  overrides: [
    // node files
    {
      files: [
        '.ember-cli.js',
        '.eslintrc.js',
        '.stylelintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      excludedFiles: [
        'app/**',
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      })
    }
  ]
};
