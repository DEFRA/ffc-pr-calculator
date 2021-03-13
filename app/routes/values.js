const joi = require('joi')
const ViewModel = require('./models/values')
const buildQueryString = require('../utils/build-query-string')

module.exports = [{
  method: 'GET',
  path: '/values',
  options: {
    handler: (request, h) => {
      return h.view('values', new ViewModel())
    }
  }
},
{
  method: 'POST',
  path: '/values',
  options: {
    validate: {
      payload: joi.object({
        value2021: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
        value2022: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
        value2023: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000),
        value2024: joi.number().empty('').allow(null).precision(2).greater(0).less(1000000000)
      }).min(1).error(errors => {
        errors.forEach(err => {
          switch (err.code) {
            case 'object.min':
              err.message = 'There needs to be a least one value for a scheme year.'
              break
            case 'number.greater':
              err.message = `The value for ${err.local.key.replace('value', '')} needs to be greater than 0.`
              break
            case 'number.less':
              err.message = `The value for ${err.local.key.replace('value', '')} needs to be less than 1000000000.`
              break
            case 'number.base':
              err.message = `The value for ${err.local.key.replace('value', '')} must be a number`
              break
            default:
              err.message = `The value for ${err.local.key.replace('value', '')} is invalid`
              break
          }
        })
        return errors
      }),
      failAction: async (request, h, error) => {
        return h.view('values', new ViewModel(request.payload, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      const queryString = buildQueryString(request.payload)
      return h.redirect(`/calculation?${queryString}`)
    }
  }
}]
