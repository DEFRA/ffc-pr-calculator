const ViewModel = require('./models/delinked-calculator')
const schema = require('./schemas/value')

module.exports = [{
  method: 'GET',
  path: '/delinked-calculator',
  options: {
    handler: (request, h) => {
      return h.view('delinked-calculator', new ViewModel())
    }
  }
},
{
  method: 'POST',
  path: '/delinked-calculator',
  options: {
    validate: {
      payload: schema,
      failAction: async (request, h, error) => {
        return h.view('delinked-calculator', new ViewModel(request.payload.value, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      return h.redirect(`/calculation-delinked?value=${request.payload.value}`)
    }
  }
}]
