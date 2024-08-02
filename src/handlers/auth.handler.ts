import { ILogInBody, IRegisterBody } from "@/interfaces/auth.interface";
import { UserModel } from "@/models/user";
import { AuthService } from "@/services/auth.service";
import { RequestHandler } from "@/types";
import { MongoErrorCodes } from "@/types/enums";
import { logger } from "@/utils/logger";
import { MongoError } from "mongodb";
import mongoose, { Error } from "mongoose";

export class AuthHandler
{
    static register: RequestHandler<IRegisterBody> = async (req, res) => {
        const { fullName, password, username, avatarUrl } = req.body;
        const hashedPassword = await AuthService.encryptPassword(password);
        try {
            const newUser = new UserModel({ username, fullName, password: hashedPassword, avatarUrl });
            await newUser.save();
            return res.sendStatus(201);
        } catch (err) {
            if (err instanceof Error.CastError && err.value === MongoErrorCodes.DuplicateKey) {
                return res.status(409).json({ message: 'Username already exists' });
            }
            return res.sendStatus(500);
        }
    }

    static logIn: RequestHandler<ILogInBody> = async (req, res) => {
        const { username, password } = req.body;
        try {
            const user = await UserModel.findOne({ username }, { username, password });
            if (!user) {
                return res.sendStatus(404);
            }
            const { password: userPassword } = user;
            const passwordMatches = await AuthService.comparePassword(password, userPassword);
            if (!passwordMatches) {
                return res.sendStatus(401);
            }
            return res.sendStatus(200);
        } catch (err) {
            logger.error(err);
            return res.sendStatus(500);
        }
    }

    static logOut: RequestHandler = async (req, res) => {
        
    }

    static forgotPassword: RequestHandler = async (req, res) => {
        
    }

    static resetPassword: RequestHandler = async (req, res) => {
        
    }

}