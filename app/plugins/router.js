const routes = [].concat(
  require('../routes/home'),
  require('../routes/bps'),
  require('../routes/healthy'),
  require('../routes/healthz'),
  require('../routes/static')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
