import Joi from '@hapi/joi';

export default{
    createMark: Joi.object({
        mark_name: Joi.string().required().min(1),
        mark_description: Joi.string().required().min(3)
    }),
    updateMark: Joi.object({
        mark_name: Joi.string().required().min(1),
        mark_description: Joi.string().required().min(3)
    })
}