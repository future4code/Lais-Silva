import { Request, Response } from 'express';
import UserBusiness from '../business/userBusiness';

export  default async function getAllUsers(req: Request, res: Response){
try {
    
    const token = req.headers.authorization ;
    const users = await new UserBusiness().getAllUsers(token as string)
    
    res.status(200).send({ users })

} catch (error) {
    res.status(error.status).send({ message: error.message })
}
}