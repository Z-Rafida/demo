import { Router } from "express";
import { createRecommendation, deleteRecommendation, recommendationsbyBmi, updateRecommendation } from "../controllers/recommendation_controller.js";

export const recommendationRouter = Router()

recommendationRouter.post("/recommend", createRecommendation);

recommendationRouter.patch("/recommend/:id", updateRecommendation);

recommendationRouter.delete("/recommend/:id", deleteRecommendation);

recommendationRouter.get("/recommendbmi", recommendationsbyBmi);
