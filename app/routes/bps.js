const joi = require('joi')
const NameViewModel = require('./models/bps')
const ConfirmationViewModel = require('./models/confirmation')

module.exports = [{
  method: 'GET',
  path: '/bps',
  options: {
    handler: (request, h) => {
      return h.view('bps', new NameViewModel())
    }
  }
},
{
  method: 'POST',
  path: '/bps',
  options: {
    validate: {
      payload: joi.object({
        bpsValue: joi.number().precision(2).greater(0)
      }),
      failAction: async (request, h, error) => {
        return h.view('bps', new NameViewModel(request.payload.bpsValue, error)).takeover()
      }
    },
    handler: async (request, h) => {
      return h.view('confirmation', new ConfirmationViewModel(request.payload.bpsValue))
    }
  }
}]
