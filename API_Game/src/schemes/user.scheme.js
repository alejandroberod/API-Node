import Joi from '@hapi/joi';

export default{
    createUser: Joi.object({
        user_email: Joi.string().required().min(10),
        user_name: Joi.string().required().min(3),
        user_password: Joi.string().required().min(7),
        status: Joi.number().required(),
        role: Joi.number().required()
    }),
    updateUser: Joi.object({
        user_email: Joi.string().required().min(10),
        user_name: Joi.string().required().min(3),
        user_password: Joi.string().required().min(7),
        status: Joi.number().required(),
        role: Joi.number().required(),
    })
}