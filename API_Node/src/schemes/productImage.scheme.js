import Joi from '@hapi/joi';

export default{
    createProductImage: Joi.object({
        productImage_url: Joi.string().required().min(1),
        productImage_type: Joi.string().required().min(3),
        product_FK: Joi.number().required()
    }),
    updateProductImage: Joi.object({
        productImage_url: Joi.string().required().min(1),
        productImage_type: Joi.string().required().min(3),
        product_FK: Joi.number().required()
    })
}

