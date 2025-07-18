const config = require('../config')

module.exports = [{
  method: 'GET',
  path: '/assets/{path*}',
  options: {
    handler: {
      directory: {
        path: [
          'node_modules/govuk-frontend/dist/govuk/assets'
        ]
      }
    },
    cache: {
      expiresIn: config.staticCacheTimeoutMillis,
      privacy: 'private'
    }
  }
}, {
  method: 'GET',
  path: '/static/{path*}',
  options: {
    handler: {
      directory: {
        path: [
          'app/dist',
          'node_modules/govuk-frontend/dist/govuk/assets'
        ]
      }
    },
    cache: {
      expiresIn: config.staticCacheTimeoutMillis,
      privacy: 'private'
    }
  }
}, {
  method: 'GET',
  path: '/robots.txt',
  options: {
    handler: {
      file: 'app/static/robots.txt'
    },
    cache: {
      expiresIn: config.staticCacheTimeoutMillis,
      privacy: 'private'
    }
  }
}]
