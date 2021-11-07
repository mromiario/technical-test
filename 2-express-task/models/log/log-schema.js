let Joi = require('joi')

module.exports = Joi.object().keys({
  endpoint: Joi.string().required().error(() => 'must have name as string'),
  createdAt: Joi.string().error(() => 'subject must be a string'),
  parameters: Joi.object().error(() => 'parameters must be an object')
})