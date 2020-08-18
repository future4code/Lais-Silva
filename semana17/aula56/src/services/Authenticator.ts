import * as jwt from 'jsonwebtoken'

enum ROLE {
    NORMAL = "NORMAL", 
    ADMIN = "ADMIN"
}
interface AutehticationData {
    id: string, 
    role: ROLE
}

export default abstract class Authenticator {
    static generateToken(input: AutehticationData) {
        return jwt.sign(
            {
                id: input,
                role: input.role
            },
            process.env.JWT_KEY as string,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )
    }

    static getTokenData(token: string): any {
        const tokenData = jwt.verify(
            token,
            process.env.JWT_KEY as string
        )

        return tokenData as AutehticationData
    }
}