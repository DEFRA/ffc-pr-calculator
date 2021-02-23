const ViewModel = require('./models/confirmation')
const calculate = require('../calculation')
const joi = require('joi')

module.exports = [{
  method: 'GET',
  path: '/calculation',
  options: {
    validate: {
      query: joi.object({
        bpsValue: joi.number().precision(2).greater(0).required()
      }),
      failAction: async (request, h, error) => {
        return h.redirect('/bps').takeover()
      }
    },
    handler: (request, h) => {
      const result = calculate(request.query.bpsValue)
      return h.view('calculation', new ViewModel(result))
    }
  }
}]
