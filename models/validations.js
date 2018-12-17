const Joi = require('joi');

var addProductSchema = {
pid:Joi.number().required(),
pname: Joi.string().required(),
pcost:Joi.number().required(),
email: Joi.string().email({ minDomainAtoms: 2 }),
};

module.exports = {
addProductSchema: addProductSchema
}                                                 