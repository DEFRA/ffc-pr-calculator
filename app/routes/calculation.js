const ViewModel = require('./models/calculation')
const calculate = require('../calculation')
const joi = require('joi')

module.exports = [{
  method: 'GET',
  path: '/calculation',
  options: {
    validate: {
      query: joi.alternatives()
        .try(joi.object({
          value: joi.number().precision(2).greater(0).required()
        }), joi.object({
          value2021: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
          value2022: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
          value2023: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
          value2024: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000)
        }).min(1)),
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
