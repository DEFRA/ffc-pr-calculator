const joi = require('joi')
const ViewModel = require('./models/value')

module.exports = [{
  method: 'GET',
  path: '/value',
  options: {
    handler: (request, h) => {
      return h.view('value', new ViewModel())
    }
  }
},
{
  method: 'POST',
  path: '/value',
  options: {
    validate: {
      payload: joi.object({
        value: joi.number().precision(2).greater(0).less(1000000000).required()
      }),
      failAction: async (request, h, error) => {
        return h.view('value', new ViewModel(request.payload.value, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      return h.redirect(`/calculation?value=${request.payload.value}`)
    }
  }
}]
