const Joi = require('Joi');


module.exports.accordionSchema = Joi.object({
    tabs: Joi.array().object({
        title: Joi.string(),
        sections: Joi.array().object({
            // image: Joi.object({
            //     source: Joi.string(),
            //     filename: Joi.string(),
            //     url: Joi.string().domain(),
            // }),
            heading: Joi.string(),
            subheading: Joi.string(),
            information: Joi.string(),
            buttons: Joi.array().object({
                text: Joi.string(),
                url: Joi.string().domain(),
            })
        })
    })
});