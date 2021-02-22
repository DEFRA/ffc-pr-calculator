const ViewModel = require('./models/confirmation')

module.exports = [{
  method: 'GET',
  path: '/calculation',
  options: {
    handler: (request, h) => {
      return h.view('calculation', new ViewModel(request.query.bpsValue))
    }
  }
}]
