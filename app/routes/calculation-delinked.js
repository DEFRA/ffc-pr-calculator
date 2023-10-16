const ViewModel = require('./models/calculation-delinked')
const calculate = require('../calculation')
const schema = require('./schemas/value')

module.exports = [{
  method: 'GET',
  path: '/calculation-delinked',
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
      return h.view('calculation-delinked', new ViewModel(value, result))
    }
  }
}]
