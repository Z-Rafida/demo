import { Router } from "express";
import { recommendFoods } from "../controllers/category_controller.js";

const categoryRouter = Router();

categoryRouter.post('/users/recommend', recommendFoods)

export default categoryRouter;