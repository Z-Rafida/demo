import { Router } from "express";
import { getCategory, postCategory } from "../controllers/category_controller.js";

const categoryRouter =  Router();

categoryRouter.post('/category', postCategory);

categoryRouter.get('/category', getCategory);

export default categoryRouter;