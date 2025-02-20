import { Request, Response, NextFunction } from "express";
import Joi from "joi";


export const validateRequest = (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
        return res.status(400).json({
            message: "Error en la validación",
            errors: error.details.map((err) => err.message),
        });
        }

        next();
    };
};
