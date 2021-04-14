const calculate = require('../../calculation')
const boom = require('@hapi/boom')
const schema = require('../schemas/value')

module.exports = [{
  method: 'GET',
  path: '/api/v1/calculation/{value}',
  options: {
    validate: {
      params: schema,
      failAction: async (request, h, error) => {
        return boom.badRequest()
      }
    },
    handler: (request, h) => {
      const result = calculate(request.params.value)
      return h.response(result)
    }
  }
}]
