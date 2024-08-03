import Joi from "joi";

export const userSchema = Joi.object({
    firstName : Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    userName: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref("password")
}).with("password", "confirmPassword");


