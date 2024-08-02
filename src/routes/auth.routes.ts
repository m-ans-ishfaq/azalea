import { Router } from "express";
import { AuthHandler } from "@/handlers/auth.handler";
import { UserValidation } from "@/validations";
import { check } from "express-validator";
import { validate } from "@/middlewares/validation";

const auth = Router();

const { register, logIn, logOut, forgotPassword, resetPassword } = AuthHandler;
const { fullName, avatarUrl, password, username } = new UserValidation(check);

auth.post("/register", [fullName, username, password, avatarUrl], validate, register);

auth.post("/login", logIn);

auth.post("/logout", logOut);

auth.post("/forgot-password", forgotPassword);

auth.post("/reset-password", resetPassword);

export default auth;