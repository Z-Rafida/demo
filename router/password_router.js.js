import { Router } from "express";
import { forgotPassword,  newPassword,  verifyCode } from "../controllers/resetPassword.js";

const passwordRouter = Router();

passwordRouter.post("/password/recover", forgotPassword)

passwordRouter.post("/password/verify-code", verifyCode)

passwordRouter.post("/password/change", newPassword)

export default passwordRouter;