const joi = require('joi')
const ViewModel = require('./models/bps-multiple')
const buildQueryString = require('../utils/build-query-string')

module.exports = [{
  method: 'GET',
  path: '/bps/multiple',
  options: {
    handler: (request, h) => {
      return h.view('bps-multiple', new ViewModel())
    }
  }
},
{
  method: 'POST',
  path: '/bps/multiple',
  options: {
    validate: {
      payload: joi.object({
        bps2021Value: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
        bps2022Value: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
        bps2023Value: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
        bps2024Value: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000)
      }).min(1).error(errors => {
        errors.forEach(err => {
          switch (err.code) {
            case 'object.min':
              err.message = 'There needs to be a least one payment amount for a scheme year.'
              break
            case 'number.greater':
              err.message = `The payment amount for a ${err.local.key.replace('bps', '').replace('Value', '')} needs to be greater than 0 and less than 1000000000.`
              break
            case 'number.less':
              err.message = `The payment amount for a ${err.local.key.replace('bps', '').replace('Value', '')} needs to be greater than 0 and less than 1000000000.`
              break
            default:
              break
          }
        })
        return errors
      }),
      failAction: async (request, h, error) => {
        console.log(error.details)
        return h.view('bps-multiple', new ViewModel(request.payload, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      const queryString = buildQueryString(request.payload)
      return h.redirect(`/calculation/multiple?${queryString}`)
    }
  }
}]
