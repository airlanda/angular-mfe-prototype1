
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'projectsMfeAg1',

  exposes: {
    // Adjusted line:
    './Module': './projects/mfe-ag1/src/app/shash/shash-quash/shash.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

