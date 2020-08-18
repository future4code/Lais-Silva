import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import signup from "./endpoints/signup";
import getUserById from "./endpoints/getUserById";
import editUser from "./endpoints/editUser";
import login from "./endpoints/login";
import HashManager from "./services/HashManager";
import deleteUser from "./endpoints/deleteUser";
import getUser from "./endpoints/getUser";

/******************************************************************/

dotenv.config();

/******************************************************************/

const app = express();
app.use(express.json());

app.delete("/user/delete/:id", deleteUser);
app.post("/user/signup", signup);
app.post("/user/login", login);
app.get("/user/find/:id", getUser);
app.get("/user/:id", getUserById);

app.post("/user/edit/", editUser);



const server = app.listen(process.env.PORT || 3300, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

