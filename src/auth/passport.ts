import { UserModel } from "@/models/user";
import { AuthService } from "@/services/auth.service";
import { logger } from "@/utils/logger";
import passport from "passport";
import { Strategy } from "passport-local";

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await UserModel.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

export default passport.use(
    new Strategy(async (username, password, done) => {
        try {
            const user = await UserModel.findOne({ username });
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            const isMatch = await AuthService.comparePassword(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);
        } catch (err) {
            logger.error(err);
            return done(err);
        }
    })
)