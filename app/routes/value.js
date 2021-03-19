const joi = require('joi')
const ViewModel = require('./models/value')

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
      payload: joi.object({
        value: joi.number().precision(2).greater(0).less(1000000000).required()
      }).error(errors => {
        errors.forEach(err => {
          switch (err.code) {
            case 'number.greater':
              err.message = 'The value needs to be greater than £0.'
              break
            case 'number.less':
              err.message = 'The value needs to be less than £1,000,000,000.'
              break
            default:
              err.message = 'The value must be between £0 and £1,000,000,000.'
              break
          }
        })
        return errors
      }),
      failAction: async (request, h, error) => {
        return h.view('value', new ViewModel(request.payload.value, error)).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      return h.redirect(`/calculation?value=${request.payload.value}`)
    }
  }
}]
