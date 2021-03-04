const ViewModel = require('./models/calculation')
const { calculateSingle, calculateMultiple } = require('../calculation')
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
      const result = calculateSingle(request.query.bpsValue)

      const values = { multipleValues: {} }
      const includeMultipleValues = { ...result, ...values }

      return h.view('calculation', new ViewModel(request.query.bpsValue, includeMultipleValues))
    }
  }
},
{
  method: 'GET',
  path: '/calculation/multiple',
  options: {
    validate: {
      query: joi.object({
        bps2021Value: joi.number().precision(2).greater(0).required(),
        bps2022Value: joi.number().precision(2).greater(0).required(),
        bps2023Value: joi.number().precision(2).greater(0).required(),
        bps2024Value: joi.number().precision(2).greater(0).required()
      }),
      failAction: async (request, h, error) => {
        return h.redirect('/bps/multiple').takeover()
      }
    },
    handler: (request, h) => {
      const schemeYearValues = [{ schemeYear: 2021, bpsValue: request.query.bps2021Value },
        { schemeYear: 2022, bpsValue: request.query.bps2022Value },
        { schemeYear: 2023, bpsValue: request.query.bps2023Value },
        { schemeYear: 2024, bpsValue: request.query.bps2024Value }]

      const result = calculateMultiple(schemeYearValues)

      const values = {
        multipleValues: {
          bps2021Value: request.query.bps2021Value,
          bps2022Value: request.query.bps2022Value,
          bps2023Value: request.query.bps2023Value,
          bps2024Value: request.query.bps2024Value
        }
      }

      const includeMultipleValues = { ...result, ...values }
      return h.view('calculation', new ViewModel(request.query.bpsValue, includeMultipleValues))
    }
  }
}]
