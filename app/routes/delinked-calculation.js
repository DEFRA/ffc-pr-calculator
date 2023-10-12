const ViewModel = require('./models/delinked-calculation')
const calculate = require('../calculation')
const schema = require('./schemas/value')

module.exports = [{
  method: 'GET',
  path: '/delinked-calculation',
  options: {
    validate: {
      query: schema,
      failAction: async (request, h, error) => {
        return h.redirect('/delinked-calculator').takeover()
      }
    },
    handler: (request, h) => {
      const value = request.query.value || JSON.parse(JSON.stringify(request.query))
      const result = calculate(value)
      return h.view('delinked-calculation', new ViewModel(value, result))
    }
  }
}]
