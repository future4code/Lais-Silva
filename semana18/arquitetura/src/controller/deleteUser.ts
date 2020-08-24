import { Request, Response } from 'express';
import UserBusiness from '../business/userBusiness';

export default async function getAllUsers(req: Request, res: Response) {
    try {

        const token = req.headers.authorization as string;
        const id = req.body.id as string;

        new UserBusiness().deleteUser(token, id)
        res.status(200).send({ message: "Usuário apagado com sucesso" });

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}