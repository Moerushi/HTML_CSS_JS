const Joi = require('joi');

// создаем схему для валидации, в данном случае валидировать как строку, возвращает значение либо значение и ошибку с описанием
const articleSchema = Joi.object({
    title: Joi.string().min(5).required(),
    content: Joi.string().min(10).required()
});

const idSchema = Joi.object({
    id: Joi.number().required()
});

module.exports = { articleSchema, idSchema };