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
        await newUser.save();
        return res.sendStatus(201);
    };

    static logIn: RequestHandler<z.infer<typeof AuthSchema.logInBody>> = async (req, res) => {
        const { username, password } = req.body;
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
    };

    static logOut: RequestHandler = async (req, res) => { };

    static forgotPassword: RequestHandler = async (req, res) => { };

    static resetPassword: RequestHandler = async (req, res) => { };
}
