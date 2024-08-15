import { RecommendationModel } from "../models/recommendation_model.js";

export const createRecommendation = async (req, res) => {
    try {
        const newMeal = await  RecommendationModel.create(req.body);
    newMeal.save()
    res.status(201).json(newMeal)
    } catch (error) {
        console.log(error.message)
    }
};


export const updateRecommendation = async (req, res) => {
    try {
        const updateMeal = await RecommendationModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updateMeal) {
            return res.status(404).json({error: "Meal not found"})
        }
        res.json(updateMeal);
    } catch (error) {
        console.log(error.message)
    }
};


export const deleteRecommendation = async(req, res) => {
    try {
        const deleteMeal = await RecommendationModel.findByIdAndDelete(req.params.id);
        res.json("Meal has been successfully deleted");
    } catch (error) {
        console.log(error.message)
    }
};


export const recommendationsbyBmi = async(req, res) =>{
    try {
        const {bmi} = req.query;
        let category;
        if (bmi > 30) {
            category = 'Lose Weight';
          } else if (bmi >= 18.5 && bmi < 29.9) {
            category = 'Stay Fit';
          } else if (bmi < 18.5) {
            category = 'Gain weight';
          } else {
            return res.status(400).json({ error: 'Invalid BMI range' });
          }

          const recommendMeal = await RecommendationModel.find({categoryType});
          res.json(recommendMeal);
    } catch (error) {
        console.log(error)
    }
};