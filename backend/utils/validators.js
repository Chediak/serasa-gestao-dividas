const Joi = require('joi');

const debtSchema = Joi.object({
  title: Joi.string().required(),
  amount: Joi.number().positive().required(),
  dueDate: Joi.date().iso().required(),
  status: Joi.string().valid('Pendente', 'Pago', 'Atrasado').required(),
  notes: Joi.string().allow(null, ''),
});

module.exports = {
  validateDebt: (data) => debtSchema.validate(data),
};
