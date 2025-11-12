const config = require('../config')

module.exports = {
  plugin: require('hapi-pino'),
  options: {
    stream: config.isDev ? require('pino-pretty')({ colorize: true }) : undefined,
    logPayload: true,
    level: 'warn'
  }
}
