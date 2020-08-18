import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";

import UserDB from "../data/UserDatabase";
import HashManager from "../services/HashManager";

export default async function signup(req: Request, res: Response) {
    try {
        const {email, password, role } = req.body
        const id = Math.random().toString()


        const cypherText = await HashManager.hash(password)
        if (!email || !password) {
            throw new Error("\"name\",\"\"email\" são obrigatórios")
        }

        await new UserDB().createUser(id, email, cypherText, role)

        const token = Authenticator.generateToken({ id, role })

        res
            .status(200)
            .send({
                message: "Usuário criado!",
                token
            });
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            });
    }
}