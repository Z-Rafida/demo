import { Router } from "express";
import { createRecommendation, deleteRecommendation, recommendationsbyBmi, updateRecommendation } from "../controllers/recommendation_controller.js";
import { remoteUploads } from "../middlewares/uploads.js";

export const recommendationRouter = Router()

recommendationRouter.post("/recommend", remoteUploads.single("image"), createRecommendation);

recommendationRouter.patch("/recommend/:id", updateRecommendation);

recommendationRouter.delete("/recommend/:id", deleteRecommendation);

recommendationRouter.get("/recommendbmi", recommendationsbyBmi);
