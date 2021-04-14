const ViewModel = require('./models/value')
const schema = require('./schemas/value')

module.exports = [{
  method: 'GET',
  path: '/value',
  options: {
    handler: (request, h) => {
      return h.view('value', new ViewModel())
    }
  }
},
{
  method: 'POST',
  path: '/value',
  options: {
    validate: {
      payload: schema,
      failAction: async (request, h, error) => {
        return h.view('value', new ViewModel(request.payload.value, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      return h.redirect(`/calculation?value=${request.payload.value}`)
    }
  }
}]
