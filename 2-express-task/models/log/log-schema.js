let Joi = require('joi')

module.exports = Joi.object().keys({
  endpoint: Joi.string().required(),
  createdat: Joi.date().required(),
  parameters: Joi.object().required()
})