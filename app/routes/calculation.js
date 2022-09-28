const ViewModel = require('./models/calculation')
const calculate = require('../calculation')
const schema = require('./schemas/value')

module.exports = [{
  method: 'GET',
  path: '/calculation',
  options: {
    validate: {
      query: schema,
      failAction: async (request, h, error) => {
        return h.redirect('/value').takeover()
      }
    },
    handler: (request, h) => {
      const value = request.query.value || JSON.parse(JSON.stringify(request.query))
      const result = calculate(value)
      return h.view('calculation', new ViewModel(request.query, result))
    }
  }
}]

