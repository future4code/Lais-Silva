"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDatabase_1 = __importDefault(require("../data/UserDatabase"));
const IdGenerator_1 = require("../services/IdGenerator");
const HashManager_1 = require("../services/HashManager");
const Authenticator_1 = require("../services/Authenticator");
class UserBusiness {
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("oui");
                if (!user.name || !user.email || !user.password) {
                    throw new Error("Todos os campos são obrigatorios.");
                }
                if (user.password.length < 6) {
                    throw new Error("Sua senha precisa de no minimo 6 caracteres.");
                }
                const id = new IdGenerator_1.IdGenerator().generate();
                const cypherText = yield new HashManager_1.HashManager().hash(user.password);
                yield new UserDatabase_1.default().createUser(id, user.name, user.email, cypherText, user.role);
                const token = new Authenticator_1.Authenticator().generateToken({ id, role: user.role });
                console.log(token, "user business");
                return token;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    ;
}
exports.default = UserBusiness;
