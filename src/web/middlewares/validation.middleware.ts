import { NextFunction, Request, Response } from "express";
import * as yup from 'yup';
import { Assign, ObjectShape } from "yup/lib/object";

export const validation = (schema: yup.ObjectSchema<Assign<ObjectShape, any>>) => async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    try {
        await schema.validate(body);
        next()
    } catch (error) {
        return res.status(400).json({ errors:error.errors });
    }

}