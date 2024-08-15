import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userSchema } from "../schema/user_schema.js";
import { UserModel } from "../models/user_model.js";

// signing up a user
export const signUp =  async (req, res, next) => {
    try {
        const {error,value} = userSchema.validate(req.body);
        if (error){
            return res.status(400).send(error.details[0].message)
        }
        const {email} = value
        const ifUserExist =   await UserModel.findOne({email})
        if (ifUserExist){
            return res.status(400).send('user already exist, login')    
        }
        const hashedPassword = bcrypt.hashSync(value.password, 10)
        await UserModel.create({
            ...value,
            password:hashedPassword
        })
        res.status(201).send('sign up successful')
    } catch (error) {
       next(error)
    }
};


// sign in using token
export const login = async (req, res, next) =>{
    try {
        const {email, password} = req.body;
        if (error){
            return res.status(400).send(error.details[0].message)
        }
        const user = await UserModel.findOne(email, value.email)
        if (!user){
            return res.status(400).send("user does not exist")
        }
        const checkPassword = await bcrypt.compare(password,user.password)
        if (!checkPassword){
            return res.status(400).send("invalid login credentials")
        }
        const token = jwt.sign({id:user._id}, process.env.JWT_PRIVATE_KEY, {expiresIn:"24h"})
        res.status(200).json({
            message:"user logged in", 
            accessToken: token
        })
    } catch (error) {
        next (error)
    }
};

