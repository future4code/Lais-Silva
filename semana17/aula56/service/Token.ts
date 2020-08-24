import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

export class Authenticator {
    private static EXPIRES_IN = "700min";
    static key = process.env.JWT_KEY as string

    public generateToken(input: string): string {
        const token = jwt.sign(
            {
                input
            },
            Authenticator.key,
            {
                expiresIn: Authenticator.EXPIRES_IN
            }
        )
        return token
    }

    public getData(token: string) {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.input,
        };
        return result;
    }
}
