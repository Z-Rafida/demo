import { model, Schema } from "mongoose";

const recommendModel = new Schema({
    mealName: {type: String, unique: true},
    description: {type: String},
    image: {type: String, required: true},
    categoryType: {type: String, required:true, unique: true}
});
 
export const RecommendationModel = model("Recommend", recommendModel);