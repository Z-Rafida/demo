import { CategoryModel } from "../models/category_model.js";
import { RecommendationModel } from "../models/recommendation_model.js";

export const createRecommendation = async (req, res, next) => {
    try {
        const newMeal = await  RecommendationModel.create({
            ...req.body,
            image: req.file.filename
        });
    
    res.status(201).json(newMeal)

    } catch (error) {
    
        next(error)
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
        let categoryType;
        if (bmi > 30) {
            categoryType = 'Weight Loss';
          } else if (bmi >= 18.5 && bmi < 29.9) {
            categoryType = 'Stay Fit';
          } else if (bmi < 18.5) {
            categoryType = 'Weight Gain';
          } else {
            return res.status(400).json({ error: 'Invalid BMI range' });
          }
          const category = await CategoryModel.findOne({type: categoryType})
          if (!category){
            return res.status(404).json('Category not found')
          }
          const recommendMeal = await RecommendationModel.find({categoryType:category.id});
          res.json(recommendMeal);
    } catch (error) {
        console.log(error)
    }
};