import UserDatabase from '../data/UserDatabase';
import { IdGenerator } from '../services/IdGenerator';
import { HashManager } from '../services/HashManager';
import { Authenticator } from '../services/Authenticator';
import { Hash } from 'crypto';


export default class UserBusiness {

    public async createUser(user: any): Promise<string> {
        try {

            if (!user.name || !user.email || !user.password) {
                throw new Error("Todos os campos são obrigatorios.")
            }
            if (user.password.length < 6) {
                throw new Error("Sua senha precisa de no minimo 6 caracteres.")
            }
            const id = new IdGenerator().generate()
            const cypherText = await new HashManager().hash(user.password)

            await new UserDatabase().createUser(id, user.name, user.email, cypherText, user.role)


            const token = new Authenticator().generateToken({ id, role: user.role })
            return token;

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public async getUserByEmail(email: string, password: string): Promise<any> {
        try {

            if (!email || !password) {
                throw new Error("Informe um email válido.")
            };

            const user = await new UserDatabase().getUserByEmail(email)
            const isPasswordCorrect = new HashManager().compare(password, user.password)

            if (!isPasswordCorrect) {
                throw new Error("Dados incorretos.")
            };

            const token = new Authenticator().generateToken({ id: user.id, role: user.role })
            return token;

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllUsers(token: string): Promise<any> {
        try {
            new Authenticator().getData(token)
            return await new UserDatabase().getAllUsers()
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async deleteUser(token: string, id: string): Promise<void> {
        try {
            const tokenData = new Authenticator().getData(token)
            if (tokenData.role !== 'ADMIN'){
                throw new Error("Apenas administradores podem deletar usuários!")
            }

            await new UserDatabase().deleteUser(id)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}