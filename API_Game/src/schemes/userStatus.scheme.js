import Joi from '@hapi/joi';

export default{
    createUserStatus: Joi.object({
        status_name: Joi.string().required().min(1),
        status_descriptions: Joi.string().required().min(3)
    }),
    updateUserStatus: Joi.object({
        status_name: Joi.string().required().min(1),
        status_descriptions: Joi.string().required().min(3)
    })
}