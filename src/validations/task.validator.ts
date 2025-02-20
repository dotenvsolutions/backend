import Joi from "joi";

export const formSchema = Joi.object({
    title: Joi.string().max(100).required(),
    description: Joi.string().max(500),
    priority: Joi.string().required(),
    isCompleted: Joi.boolean().required(),
    dueDate: Joi.date().required()
})