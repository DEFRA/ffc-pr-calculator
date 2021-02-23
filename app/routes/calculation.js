const ViewModel = require('./models/confirmation')
const joi = require('joi')

module.exports = [{
  method: 'GET',
  path: '/calculation',
  options: {
    validate: {
      query: joi.object({
        bpsValue: joi.number().precision(2).greater(0).required()
      }),
      failAction: async (request, h, error) => {
        return h.redirect('/bps').takeover()
      }
    },
    handler: (request, h) => {
      return h.view('calculation', new ViewModel(request.query.bpsValue))
    }
  }
}]
