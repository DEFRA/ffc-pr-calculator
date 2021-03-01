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
    handler: async (request, h) => {
      console.log('payload', request.payload)
      return h.redirect(`/calculation/multiple?bps2021Value=${request.payload.bps2021Value}&bps2022Value=${request.payload.bps2022Value}&bps2023Value=${request.payload.bps2023Value}&bps2024Value=${request.payload.bps2024Value}`)
    }
  }
}]
