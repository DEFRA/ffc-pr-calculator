const joi = require('joi')
const ViewModel = require('./models/bps')

module.exports = [{
  method: 'GET',
  path: '/bps',
  options: {
    handler: (request, h) => {
      return h.view('bps', new ViewModel())
    }
  }
},
{
  method: 'POST',
  path: '/bps',
  options: {
    validate: {
      payload: joi.object({
        bpsValue: joi.number().precision(2).greater(0).required()
      }),
      failAction: async (request, h, error) => {
        return h.view('bps', new ViewModel(request.payload.bpsValue, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      return h.redirect(`/calculation?bpsValue=${request.payload.bpsValue}`)
    }
  }
}]
