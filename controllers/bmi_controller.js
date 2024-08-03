import { BmiModel } from "../models/bmi_model.js"

export const calculateBmi = async (req, res, next) => {
    try {
        const {weight, height} = req.body
        if (!weight || !height) {
            return res.status(400).send("weight and height are required")
        }
        const bmiRequirement = await BmiModel.create({weight, height})
        bmiRequirement.save()
        const bmi = calculate_bmi(weight, height)
        res.send({bmi})
    } catch (error) {
        next(error)
    }
    function calculate_bmi(weight, height) {
        let bmi = weight / (height * height);
        return bmi.toFixed(2);
}}