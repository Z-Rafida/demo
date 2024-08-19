import { Router } from "express";
import { login, signUp } from "../controllers/user_controller.js";

const userRouter = Router();

// sign up
userRouter.post("/users/signup", signUp)

// login
userRouter.post("/users/login", login)


export default userRouter;