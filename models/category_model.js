import { model, Schema } from "mongoose";

const categoryModel = new Schema ({
    name: {type: String, required: true, unique: true},
    description: {type: String},
    foods: [{type: String}]
});


export const CategoryModel = model("Category", categoryModel);