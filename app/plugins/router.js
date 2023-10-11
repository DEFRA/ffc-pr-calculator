const routes = [].concat(
  require('../routes/healthy'),
  require('../routes/healthz'),
  require('../routes/static'),
  require('../routes/home'),
  require('../routes/value'),
  require('../routes/calculation'),
  require('../routes/delinked-value'),
  require('../routes/delinked-calculation'),
  require('../routes/cookies'),
  require('../routes/accessibility'),
  require('../routes/privacy'),
  require('../routes/api/calculation')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
