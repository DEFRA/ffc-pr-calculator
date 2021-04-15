const joi = require('joi')

module.exports = joi.object({
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
      case 'number.unsafe':
        err.message = 'The value needs to be less than £1,000,000,000.'
        break
      case 'number.base':
        err.message = 'The value must be a number without commas.'
        break
      default:
        err.message = 'The value must be between £0 and £1,000,000,000.'
        break
    }
  })
  return errors
})
