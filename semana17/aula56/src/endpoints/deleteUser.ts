import { Request, Response } from 'express';
import UserDB from '../data/UserDatabase';
import Authenticator from "../services/Authenticator";

export default async function deleteUser(req: Request, res: Response) {

    try {
        const id = req.params.id;
        const token = req.headers.token as string;

        const tokenData = await Authenticator.getTokenData(token)

        if (!token) {
            res
                .status(400)
        }

        if (tokenData.role !== "ADMIN") {
            res
                .status(401)
                .send({
                    message: "Não autorizado.",
                });
        }

        await new UserDB().deleteUser(id)
        res
            .status(200)
            .send({
                message: "Usuário apagado!",
            });

    } catch (error) {
        res.status(401)
    }
}