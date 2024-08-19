import { CategoryModel } from "../models/category_model.js";

export const postCategory = async(req, res, next) => {
    try {
        const newCategory = await CategoryModel.create(req.body)
        res.status(201).json(newCategory);
    } catch (error) {
        next(error)
    }
};



export const getCategory = async(req, res, next) => {
    try {
        const {limit = 10,
            filter = "{}",
            skip =0,
            fields = "{}",
            sort = "{}"
        } = req.query;
        const allCategories = await CategoryModel
        .find(JSON.parse(filter))
        .sort(JSON.parse(sort))
        .select(JSON.parse(fields))
        .limit(limit)
        .skip(skip);
        res.status(200).json(allCategories);
    } catch (error) {
        next(error)
    }
}