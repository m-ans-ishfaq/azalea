import { UserModel } from '@/models/user';
import { RequestHandler } from '@/types';

export class UsersHandler {
    static getAll: RequestHandler = async (req, res) => {
        const users = await UserModel.find();
        res.json(users);
    };
}
