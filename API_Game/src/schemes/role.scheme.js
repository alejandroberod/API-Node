import Joi from '@hapi/joi';

export default{
    createRole: Joi.object({
        role_name: Joi.string().required().min(1),
        role_descriptions: Joi.string().required().min(3)
    }),
    updateRole: Joi.object({
        role_name: Joi.string().required().min(1),
        role_descriptions: Joi.string().required().min(3)
    })
}