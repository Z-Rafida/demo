import { model, Schema } from "mongoose";

const recommendModel = new Schema({
    mealName: {type: String, unique: true},
    description: {type: String},
    image: {type: String},
    categoryType: {type: String, enum:["Gain Weight", "Lose Weight", "Stay Fit"],required:true},
    calories: { type: Number, required: true }

});
 
export const RecommendationModel = model("Recommend", recommendModel);