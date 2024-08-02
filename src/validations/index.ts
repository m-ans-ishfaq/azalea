import { Validator } from "@/types";

export class UserValidation
{
    constructor(private validate: Validator) {}

    fullName = this.validate('fullName')
    .isLength({ min: 3, max: 40 })
    .withMessage('Full Name must be between 3 and 40 characters')
    
    username = this.validate('username')
    .isLength({ min: 3, max: 25 })
    .withMessage('Username must be between 3 and 25 characters')
    .isAlphanumeric()
    .withMessage('Username must be alphanumeric')

    password = this.validate('password')
    .isLength({ min: 8, max: 40 })
    .withMessage('Password must be between 8 and 40 characters')

    avatarUrl = this.validate('avatarUrl')
    .optional()
    .isURL()
    .withMessage('Avatar URL must be a valid URL')
    
}