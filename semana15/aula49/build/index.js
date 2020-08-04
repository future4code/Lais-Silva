"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allDishs = void 0;
var SaltDish_1 = require("./Desafios/SaltDish");
var Desserts_1 = require("./Desafios/Desserts");
var Cashier_1 = require("./Desafios/Cashier");
var Manager_1 = require("./Desafios/Manager");
var Chef_1 = require("./Desafios/Chef");
var fs = __importStar(require("fs"));
var Lasanha = new SaltDish_1.SaltDish("Lasanha", 20, ["massa", "molho", "presunto", "queijo"], 20, 40);
var Macarrão = new SaltDish_1.SaltDish("Macarrão", 20, ["massa", "molho"], 15, 30);
var Bolo = new Desserts_1.Dessert("Bolo", 25, ["farinha", "ovos", "chocolate"], 15, 30);
var Pudim = new Desserts_1.Dessert("Pudim", 40, ["leite", "ovos", "açúcar"], 15, 30);
exports.allDishs = [Lasanha, Macarrão, Bolo, Pudim];
var newCashier = new Cashier_1.Cashier("Nome do Caixa", 1000);
var newManager = new Manager_1.Manager("Nome da Gerente", 2000);
var newChef = new Chef_1.Chef("Nome da Chef", 1800);
console.log(newChef.removeDishFromMenu("Bolo", exports.allDishs));
var allEmployees = [newCashier, newChef, newManager];
var fileData = JSON.parse(fs.readFileSync('./restaurant.json').toString());
var dataAsString = JSON.stringify(allEmployees, null, 2);
fs.writeFileSync('./restaurant.json', dataAsString);
//# sourceMappingURL=index.js.map