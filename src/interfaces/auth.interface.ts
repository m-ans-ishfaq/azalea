export interface IRegisterBody
{
    fullName: string;
    username: string;
    password: string;
    avatarUrl?: string;
}

export interface ILogInBody
{
    username: string;
    password: string;
}