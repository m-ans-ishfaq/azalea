import { Router } from 'express';
import { UsersHandler } from '@/handlers/user.handler';
import { requestHandler } from '@/utils/api-handler';

const users = Router();

const { getAll } = UsersHandler;

users.get('/', requestHandler(getAll));

export default users;
    