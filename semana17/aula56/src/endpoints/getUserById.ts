import { Request, Response } from "express";
import UserDB from "../data/UserDatabase";
import Authenticator from "../services/Authenticator";

export default async function getUserById(req: Request, res: Response) {
    try {
        const user = await new UserDB().getUserById(req.params.id)
        const token = req.headers.token as string

        const authData = Authenticator.getTokenData(token)
        if (authData.role !== "NORMAL") {
            throw new Error("Não autorizado.")
        }

        if (!user) {
            res
                .status(404)
                .send({
                    message: "Usuário não encontrado"
                });
        }

        res
            .status(200)
            .send({
                message: "Sucesso!",
                user
            });
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            });
    }
}