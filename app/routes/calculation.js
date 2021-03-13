const ViewModel = require('./models/calculation')
const { calculateFromValue, calculateFromSchemeYears } = require('../calculation')
const joi = require('joi')

module.exports = [{
  method: 'GET',
  path: '/calculation',
  options: {
    validate: {
      query: joi.alternatives().try(joi.object({
        value: joi.number().precision(2).greater(0).required()
      }), joi.object({
        value2021: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
        value2022: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
        value2023: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
        value2024: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000)
      }).min(1)),
      failAction: async (request, h, error) => {
        return h.redirect('/input-type').takeover()
      }
    },
    handler: (request, h) => {
      if (request.query.value) {
        const result = calculateFromValue(request.query.value)

        const values = { multipleValues: {} }
        const includeMultipleValues = { ...result, ...values }

        return h.view('calculation', new ViewModel(request.query.value, includeMultipleValues, 'single'))
      } else {
        const schemeYearValues = [{ schemeYear: 2021, bpsValue: request.query.value2021 || 0 },
          { schemeYear: 2022, bpsValue: request.query.value2022 || 0 },
          { schemeYear: 2023, bpsValue: request.query.value2023 || 0 },
          { schemeYear: 2024, bpsValue: request.query.value2024 || 0 }]

        const result = calculateFromSchemeYears(schemeYearValues)

        const values = {
          multipleValues: {
            bps2021Value: request.query.value2021 || 0,
            bps2022Value: request.query.value2022 || 0,
            bps2023Value: request.query.value2023 || 0,
            bps2024Value: request.query.value2024 || 0
          }
        }

        const includeMultipleValues = { ...result, ...values }
        return h.view('calculation', new ViewModel(request.query.value, includeMultipleValues, 'multiple'))
      }
    }
  }
}]
