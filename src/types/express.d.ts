import { Document, Types } from 'mongoose';
import { User as PassportUser } from 'passport';

declare global {
    namespace Express {
        interface User extends PassportUser, Document {
            id?: Types.ObjectId;
            username: string;
            password: string;
            avatarUrl?: string;
            fullName?: string;
        }
    }
}