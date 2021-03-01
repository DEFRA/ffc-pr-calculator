const joi = require('joi')
const ViewModel = require('./models/bps-selection')

module.exports = [{
  method: 'GET',
  path: '/bps/selection',
  options: {
    handler: (request, h) => {
      return h.view('bps-selection', new ViewModel())
    }
  }
},
{
  method: 'POST',
  path: '/bps/selection',
  options: {
    validate: {
      payload: joi.object({
        bpsSelection: joi.string().required()
      }),
      failAction: async (request, h, error) => {
        return h.view('bps-selection', new ViewModel(request.payload.bpsSelection, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      console.log(request.payload.bpsSelection)
      const redirect = request.payload.bpsSelection === 'multiple'? '/bps/multiple' : '/bps'
      return h.redirect(redirect)
    }
  }
}]
