const ViewModel = require('./models/value-calculator')
const schema = require('./schemas/value')

module.exports = [{
  method: 'GET',
  path: '/value-calculator',
  options: {
    handler: (request, h) => {
      return h.view('value-calculator', new ViewModel())
    }
  }
},
{
  method: 'POST',
  path: '/value-calculator',
  options: {
    validate: {
      payload: schema,
      failAction: async (request, h, error) => {
        return h.view('value-calculator', new ViewModel(request.payload.value, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      return h.redirect(`/calculation?value=${request.payload.value}`)
    }
  }
}]
