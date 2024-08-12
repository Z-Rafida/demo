import { CategoryModel } from "../models/category_model.js";

export const recommendFoods = async (bmi) => {
    try {
        let category;

        if (bmi < 18.5) {
            category = await CategoryModel.findOne({ name: 'Weight Gain' });
        } else if (bmi <= 18.5 && bmi <= 24.9) {
            category = await CategoryModel.findOne({ name: 'General Fitness' });
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = await CategoryModel.findOne({ name: 'Weight Loss' });
        } else {
            category = await CategoryModel.findOne({ name: 'Weight Loss' });
        }
        return category ? category.foods : []

    } catch (error) {
        console.log(error.message)
    }
};