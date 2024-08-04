import { UserModel } from '@/models/user';
import { AuthSchema } from '@/schemas/auth.schema';
import { AuthService } from '@/services/auth.service';
import { RequestHandler } from '@/types';
import { z } from 'zod';

export class AuthHandler {
    static register: RequestHandler<z.infer<typeof AuthSchema.registerBody>> = async (req, res) => {
        const { fullName, password, username, avatarUrl } = req.body;
        const hashedPassword = await AuthService.encryptPassword(password);
        const newUser = new UserModel({
            username,
            fullName,
            password: hashedPassword,
            avatarUrl,
        });
        const savedUser = await newUser.save();
        return res.sendStatus(201);
    };

    static logIn: RequestHandler<z.infer<typeof AuthSchema.logInBody>> = async (req, res) => {
        return res.sendStatus(200);
    };

    static logOut: RequestHandler = async (req, res) => { };

    static forgotPassword: RequestHandler = async (req, res) => { };

    static resetPassword: RequestHandler = async (req, res) => { };
}
