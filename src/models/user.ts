import { getModelForClass, prop } from '@typegoose/typegoose';

class User {
    @prop({
        required: true,
        minlength: 3,
        maxlength: 40,
    })
    public fullName!: string;

    @prop({
        required: false,
        maxlength: 512,
    })
    public avatarUrl?: string;

    @prop({
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 25,
    })
    public username!: string;

    @prop({
        required: true
    })
    public password!: string;

    @prop({
        required: true,
        default: new Date(),
    })
    public createdAt!: Date;
}

export const UserModel = getModelForClass(User);