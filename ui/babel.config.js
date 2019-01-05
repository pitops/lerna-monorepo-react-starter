module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            debug: false
          }
        ],
        '@babel/preset-react'
      ],
      plugins: [
        'react-hot-loader/babel',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        'dynamic-import-node'
      ]
    },
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: ['last 2 versions', 'not dead', 'not < 2%', 'not ie 11'],
            useBuiltIns: 'entry',
            modules: false
          }
        ],
        '@babel/preset-react'
      ],
      plugins: [
        'react-hot-loader/babel',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread'
      ]
    },
    production: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: ['last 2 versions', 'not dead', 'not < 2%', 'not ie 11'],
            useBuiltIns: 'entry',
            modules: false
          }
        ],
        '@babel/preset-react'
      ],
      plugins: [
        'react-hot-loader/babel',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread'
      ]
    }
  }
}
