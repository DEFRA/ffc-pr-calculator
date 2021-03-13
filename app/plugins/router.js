const routes = [].concat(
  require('../routes/healthy'),
  require('../routes/healthz'),
  require('../routes/static'),
  require('../routes/home'),
  require('../routes/value'),
  require('../routes/values'),
  require('../routes/input-type'),
  require('../routes/calculation'),
  require('../routes/cookies'),
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
