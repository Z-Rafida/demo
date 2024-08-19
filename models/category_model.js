import { model, Schema } from "mongoose";

 const categoryType = new Schema({
    type: {type: String, required: true},
    
}, {
    timestamps: true
})

export const CategoryModel = model('Category', categoryType)