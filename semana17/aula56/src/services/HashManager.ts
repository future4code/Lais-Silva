import * as bcrypt from 'bcryptjs';
import { Hash } from 'crypto';

export default abstract class HashManager {
    static async hash(password: string) : Promise<any> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const cypherText = await bcrypt.hash(password, salt)
        return cypherText
    }

    static async compare(password: string, cypherText: string) {
        const result = await bcrypt.compare(password, cypherText)
        return result
    }
}
