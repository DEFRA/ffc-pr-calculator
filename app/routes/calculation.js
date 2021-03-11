const ViewModel = require('./models/calculation')
const { calculateFromValue, calculateFromSchemeYears } = require('../calculation')
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
      const result = calculateFromValue(request.query.bpsValue)

      const values = { multipleValues: {} }
      const includeMultipleValues = { ...result, ...values }

      return h.view('calculation', new ViewModel(request.query.bpsValue, includeMultipleValues, 'single'))
    }
  }
},
{
  method: 'GET',
  path: '/calculation/multiple',
  options: {
    validate: {
      query: joi.object({
        bps2021Value: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
        bps2022Value: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
        bps2023Value: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
        bps2024Value: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000)
      }).min(1),
      failAction: async (request, h, error) => {
        return h.redirect('/bps/multiple').takeover()
      }
    },
    handler: (request, h) => {
      const schemeYearValues = [{ schemeYear: 2021, bpsValue: request.query.bps2021Value || 0 },
        { schemeYear: 2022, bpsValue: request.query.bps2022Value || 0 },
        { schemeYear: 2023, bpsValue: request.query.bps2023Value || 0 },
        { schemeYear: 2024, bpsValue: request.query.bps2024Value || 0 }]

      const result = calculateFromSchemeYears(schemeYearValues)

      const values = {
        multipleValues: {
          bps2021Value: request.query.bps2021Value || 0,
          bps2022Value: request.query.bps2022Value || 0,
          bps2023Value: request.query.bps2023Value || 0,
          bps2024Value: request.query.bps2024Value || 0
        }
      }

      const includeMultipleValues = { ...result, ...values }
      return h.view('calculation', new ViewModel(request.query.bpsValue, includeMultipleValues, 'multiple'))
    }
  }
}]
