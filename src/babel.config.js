// We release a ES version of Material-UI.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
const defaultPresets = [
  [
    'next/babel',
    {
      'preset-env': {},
      'transform-runtime': {},
      'styled-jsx': {},
      'class-properties': { loose: true },
      'object-rest-spread': { loose: true },
      modules: false,
    }
  ]
];

module.exports = {
  presets: defaultPresets,
  plugins: [
    'babel-plugin-optimize-clsx',
    '@babel/plugin-syntax-dynamic-import',
    // for IE 11 support
    '@babel/plugin-transform-object-assign',
  ],
  ignore: [/@babel[\\|/]runtime/] // Fix a Windows issue.
};
