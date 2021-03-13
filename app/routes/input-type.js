const joi = require('joi')
const ViewModel = require('./models/input-type')

module.exports = [{
  method: 'GET',
  path: '/input-type',
  options: {
    handler: (request, h) => {
      return h.view('input-type', new ViewModel())
    }
  }
},
{
  method: 'POST',
  path: '/input-type',
  options: {
    validate: {
      payload: joi.object({
        inputType: joi.string().required()
      }),
      failAction: async (request, h, error) => {
        return h.view('input-type', new ViewModel(request.payload.inputType, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      const redirect = request.payload.inputType === 'multiple' ? '/bps/multiple' : '/bps'
      return h.redirect(redirect)
    }
  }
}]
