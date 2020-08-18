import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import UserDB from "../data/UserDatabase";
import HashManager from "../services/HashManager";

export default async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body

        
        const user = await new UserDB().getUserByEmail(email)
        const checkPassword = await HashManager.compare(password, user.password)

        if (!user || !checkPassword) {
            throw new Error("Usuário ou senha incorretos")
        }

        const token = Authenticator.generateToken({
            id: user.id, 
            role: user.role
        })

        res
            .status(200)
            .send({
                message: "Usuário logado",
                token
            })
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            })

    }
}