const ViewModel = require('./models/delinked-value')
const schema = require('./schemas/value')

module.exports = [{
  method: 'GET',
  path: '/delinked-value',
  options: {
    handler: (request, h) => {
      return h.view('delinked-value', new ViewModel())
    }
  }
},
{
  method: 'POST',
  path: '/delinked-value',
  options: {
    validate: {
      payload: schema,
      failAction: async (request, h, error) => {
        return h.view('delinked-value', new ViewModel(request.payload.value, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      return h.redirect(`/delinked-calculation?value=${request.payload.value}`)
    }
  }
}]
