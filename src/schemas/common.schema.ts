import { z } from "zod"

export class CommonSchema
{
    static fullName = z.string();
    static username =  z.string();
    static password = z.string();
    static avatarUrl = z.string().optional();
}