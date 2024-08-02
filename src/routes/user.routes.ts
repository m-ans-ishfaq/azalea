import { Router } from "express";
import { UsersHandler } from "@/handlers/user.handler";

const users = Router();

users.get("/", UsersHandler.getAll);

export default users;