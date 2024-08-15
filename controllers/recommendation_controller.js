import { RecommendationModel } from "../models/recommendation_model.js";

export const recommendations = async(bmi) =>{
    try {
        let category;
        if (bmi < 18.5) {
            category = await RecommendationModel.findOne({categoryType: "weight gain"});

        } else if (bmi > 18.5 && bmi < 24.9 ) {
            category = await RecommendationModel.findOne({categoryType: "stay fit"});
    
        } else if (bmi >24.9 && bmi < 29.9) {
            category = await RecommendationModel.findOne({categoryType: "weight loss"});
        } else {
            category = await RecommendationModel.findOne({categoryType: "weight loss"})
        }
    } catch (error) {
        console.log(error)
    }
}