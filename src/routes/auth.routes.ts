import { Router } from 'express';
import { AuthHandler } from '@/handlers/auth.handler';
import { validate } from '@/middlewares/validation';
import { requestHandler } from '@/utils/api-handler';
import { AuthSchema } from '@/schemas/auth.schema';

const auth = Router();

const { register, logIn, logOut, forgotPassword, resetPassword } = AuthHandler;

auth.route('/register').post(
    validate('body', AuthSchema.registerBody), 
    requestHandler(register)
);

auth.route('/login').post(
    validate('body', AuthSchema.logInBody), 
    requestHandler(logIn)
);

auth.route('/logout').post(logOut);

auth.route('/forgot-password').post(forgotPassword);

auth.route('/reset-password').post(resetPassword);

export default auth;
