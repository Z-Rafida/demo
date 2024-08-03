import { Router } from "express";
import { calculateBmi } from "../controllers/bmi_controller.js";

const bmiRouter = Router();

// calculate bmi
bmiRouter.post("/users/bmi", calculateBmi)


export default bmiRouter;