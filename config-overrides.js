const {aliasDangerous, configPaths} = require('react-app-rewire-alias/lib/aliasDangerous')

const aliasMap = configPaths('./tsconfig.paths.json') // or jsconfig.paths.json

module.exports = function override(config) {
    aliasDangerous({
      ...configPaths('tsconfig.paths.json')
    })(config)

    return config
  }
// module.exports.jest = aliasJest(aliasMap)
