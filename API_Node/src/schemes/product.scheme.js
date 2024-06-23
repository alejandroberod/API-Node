import Joi from '@hapi/joi';

export default{
    createProduct: Joi.object({
        product_name: Joi.string().required().min(1),
        product_description: Joi.string().required().min(3),
        product_price: Joi.number().required(),
        product_quantity: Joi.number().required(),
        mark_FK: Joi.number().required()
    }),
    updateProduct: Joi.object({
        product_name: Joi.string().required().min(1),
        product_description: Joi.string().required().min(3),
        product_price: Joi.number().required(),
        product_quantity: Joi.number().required(),
        mark_FK: Joi.number().required()
    })
}

