import { z } from "zod";
import { CommonSchema } from "./common.schema";

export class AuthSchema
{
    static registerBody = z.object({
        fullName: CommonSchema.fullName,
        username: CommonSchema.username,
        password: CommonSchema.password,
        avatarUrl: CommonSchema.avatarUrl
    });

    static logInBody = z.object({
        username: CommonSchema.username,
        password: CommonSchema.password
    });
}