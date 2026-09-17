import express from "express";
import {
    login,
    logout,
    register,
    isAuthenticated,
    verifyEmail,
    resetPassword,
    sendResetOtp,
    sendVerifyOtp,
    verifyResetOtp,
} from "../controllers/authControllers.js";
import userAuth from "../middleware/userAuth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouter.post("/verify-account", userAuth, verifyEmail);
authRouter.post("/is-auth", userAuth, isAuthenticated);
authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/reset-otp", verifyResetOtp);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/new-password", resetPassword);

export default authRouter;