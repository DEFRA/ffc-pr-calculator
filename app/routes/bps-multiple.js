const joi = require('joi')
const ViewModel = require('./models/bps-multiple')

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
        bps2021Value: joi.number().precision(2).greater(0).less(1000000000).required(),
        bps2022Value: joi.number().precision(2).greater(0).less(1000000000).required(),
        bps2023Value: joi.number().precision(2).greater(0).less(1000000000).required(),
        bps2024Value: joi.number().precision(2).greater(0).less(1000000000).required()
      }),
      failAction: async (request, h, error) => {
        return h.view('bps-multiple', new ViewModel(request.payload.bps2021Value, request.payload.bps2022Value, request.payload.bps2023Value, request.payload.bps2024Value, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      console.log('payload', request.payload)
      return h.redirect(`/calculation/multiple?bps2021Value=${request.payload.bps2021Value}&bps2022Value=${request.payload.bps2022Value}&bps2023Value=${request.payload.bps2023Value}&bps2024Value=${request.payload.bps2024Value}`)
    }
  }
}]
