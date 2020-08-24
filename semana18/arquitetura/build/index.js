"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const createUser_1 = __importDefault(require("./src/controller/createUser"));
const app = express_1.default();
app.use(express_1.default.json());
dotenv_1.default.config();
const server = app.listen(process.env.PORT || 3306, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
app.post("/singup", createUser_1.default);
