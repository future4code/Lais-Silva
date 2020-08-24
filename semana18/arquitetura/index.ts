import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import dotenv from 'dotenv';
import createUser from "./src/controller/createUser";

const app = express();
app.use(express.json());

dotenv.config()


const server = app.listen(process.env.PORT || 3306, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});


app.post("/singup", createUser)
