import { Router } from "express";
import { login, signUp } from "../controllers/user_controller.js";

const userRouter = Router();

// sign up
userRouter.post("/users/auth/signup", signUp)

// login
userRouter.post("/users/auth/login", login)
// get
// update
// delete 

export default userRouter;