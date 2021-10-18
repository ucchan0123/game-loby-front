module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // 複数のスペースを許可しない
    'no-multi-spaces': 'error',
    // 複数の空行を許可しない。2行開けてたらエラー
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1
      }
    ],
    // true/falseを無駄に使ってはいけない
    'no-unneeded-ternary': 'error',
    // 不要なセミコロンを許可しない
    'semi': [
      'error',
      'never'
    ],
    // 文字列はシングルクオートのみ
    'quotes': [
      'error',
      'single'
    ],
    // varは禁止
    'no-var': 'error',
    // jsのインデントは２
    'indent': [
      'error',
      2
    ],
    // vueのインデントは２
    'vue/html-indent': [
      'error',
      2
    ],
    // 括弧内のスペースを禁止
    'space-in-parens': [
      'error',
      'never'
    ],
    // consoleの使用を許可
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // debuggerの使用を許可
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // カンマ周りには適切なスペースを
    'comma-spacing': 'error',
    // 配列のindex内のスペースを禁止
    'computed-property-spacing': 'error',
    // オブジェクトのキーと値の間に適切なスペースを
    'key-spacing': 'error',
    // キーワードの前後には適切なスペースを
    'keyword-spacing': 'error'
  }
}
