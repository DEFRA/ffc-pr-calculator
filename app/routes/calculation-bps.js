const ViewModel = require('./models/calculation-bps')
const calculate = require('../calculation')
const schema = require('./schemas/value')

module.exports = [{
  method: 'GET',
  path: '/calculation-bps',
  options: {
    validate: {
      query: schema,
      failAction: async (request, h, error) => {
        return h.redirect('/bps-calculation').takeover()
      }
    },
    handler: (request, h) => {
      const value = request.query.value || JSON.parse(JSON.stringify(request.query))
      const result = calculate(value)
      return h.view('calculation-bps', new ViewModel(value, result))
    }
  }
}]
