module.exports = {
  presets: [
    [
      'react-app',
      {
        development: process.env.BABEL_ENV === 'development',
      },
    ],
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ],
};
