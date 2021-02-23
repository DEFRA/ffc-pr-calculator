const calculate = require('../../calculation')
const joi = require('joi')
const boom = require('@hapi/boom')

module.exports = [{
  method: 'GET',
  path: '/api/v1/calculation/{bpsValue}',
  options: {
    validate: {
      params: joi.object({
        bpsValue: joi.number().precision(2).greater(0).required()
      }),
      failAction: async (request, h, error) => {
        return boom.badRequest()
      }
    },
    handler: (request, h) => {
      const result = calculate(request.params.bpsValue)
      return h.response(result)
    }
  }
}]
