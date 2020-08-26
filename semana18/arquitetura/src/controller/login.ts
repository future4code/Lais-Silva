import { Request, Response } from 'express';
import UserBusiness from '../business/userBusiness';

export default async function login(req: Request, res: Response) {
    try {

        const email = req.body.email as string;
        const password = req.body.password as string;

        const token = await new UserBusiness().getUserByEmail(email, password)
        res.status(200).send({
            token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}