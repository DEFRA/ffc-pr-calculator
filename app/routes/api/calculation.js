const { calculateFromValue } = require('../../calculation')
const joi = require('joi')
const boom = require('@hapi/boom')

module.exports = [{
  method: 'GET',
  path: '/api/v1/calculation/{bpsValue}',
  options: {
    validate: {
      params: joi.object({
        bpsValue: joi.number().precision(2).greater(0).less(1000000000).required()
      }),
      failAction: async (request, h, error) => {
        return boom.badRequest()
      }
    },
    handler: (request, h) => {
      const result = calculateFromValue(request.params.bpsValue)
      return h.response(result)
    }
  }
}]