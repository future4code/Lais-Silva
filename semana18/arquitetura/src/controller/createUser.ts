import { Request, Response } from 'express';
import UserBusiness from '../business/userBusiness';

export default async function createUser(req: Request, res: Response) {
    try {
        
        const user = {
            name: req.body.name as string, 
            email: req.body.name as string,
            password: req.body.password as string, 
            role: req.body.role as string
        }
        
        const userBusiness =  new UserBusiness()
        const token = await userBusiness.createUser(user)

        res.status(200).send({ token })
    } catch (error) {
        res.status(error.status).send({ error: error.message })
    };
}
