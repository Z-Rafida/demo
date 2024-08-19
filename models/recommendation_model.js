import { model, Schema, Types } from "mongoose";

const recommendModel = new Schema({
    mealName: {type: String, unique: true},
    description: {type: String},
    image: {type: String},
    Bmi: {type: String, required: true},
    categoryType: {type: Types.ObjectId, ref: 'Category', required: true},
    calories: { type: Number, required: true }

}, {
    timestamps: true
});
 
export const RecommendationModel = model("Recommend", recommendModel);