import { model, Schema, Types } from "mongoose";

const bmi = new Schema({
    weight: {type: Number, required: true},
    height: {type: Number, required: true},
    user: {type: Types.ObjectId, ref:"User"}
})

export const BmiModel = model("BMI",bmi)