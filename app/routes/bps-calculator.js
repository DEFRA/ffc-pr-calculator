const ViewModel = require('./models/bps-calculator')
const schema = require('./schemas/value')

module.exports = [{
  method: 'GET',
  path: '/bps-calculator',
  options: {
    handler: (request, h) => {
      return h.view('bps-calculator', new ViewModel())
    }
  }
},
{
  method: 'POST',
  path: '/bps-calculator',
  options: {
    validate: {
      payload: schema,
      failAction: async (request, h, error) => {
        return h.view('bps-calculator', new ViewModel(request.payload.value, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      return h.redirect(`/calculation-bps?value=${request.payload.value}`)
    }
  }
}]
