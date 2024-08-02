import { UserModel } from "@/models/user";
import { RequestHandler } from "@/types";
import { logger } from "@/utils/logger";

export class UsersHandler
{
    static getAll: RequestHandler = async (req, res) => {
        try {
            const users = await UserModel.find();
            res.json(users);
        } catch (err) {
            logger.error(err);
            res.sendStatus(500);
        }
    }
}