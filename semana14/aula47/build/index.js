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
const axios_1 = __importDefault(require("axios"));
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
const getSubscribers1 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allNews = yield axios_1.default.get(`${baseUrl}/news/all`);
        console.log("Dados acessados com sucesso");
        return allNews.data;
    }
    catch (err) {
        console.log(err);
    }
    ;
});
function getSubscribers2() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const subscribers = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
            return subscribers.data;
        }
        catch (err) {
            console.log(err);
        }
        ;
    });
}
;
function getSubscribers3() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const subscribers = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
            return subscribers.data.map((res) => {
                return {
                    login: res.login,
                    id: res.name,
                    email: res.email
                };
            });
        }
        catch (error) {
            console.log(error);
            return [];
        }
        ;
    });
}
;
const createContent = (tittle, content) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        axios_1.default.put(`baseUrl/news`, {
            tittle,
            content,
            date: Date.now()
        });
    }
    catch (error) {
    }
});
function sendNotifications() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
            for (const user of users.data) {
                yield axios_1.default.post(`${baseUrl}/notifications/send`, {
                    subscriberId: user.id,
                    message: "new news for your news thirst"
                });
            }
            ;
        }
        catch (err) {
            console.log(err);
        }
        ;
    });
}
;
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
        return users.data.map((res) => {
            return {
                id: res.id,
                name: res.name,
                email: res.email
            };
        });
    });
}
const sendNotificationsWihArray = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getUsers();
    const promiseArray = [];
    for (let user of users) {
        promiseArray.push(axios_1.default.post(`${baseUrl}/notifications/send`, {
            subscriberId: user.id,
            message: "new news for your news thirst"
        }));
    }
    yield Promise.all(promiseArray);
});
const newSubscribe = (id, name, email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        axios_1.default.put(`baseUrl/subscribers`, {
            id: id,
            name: name,
            email: email
        });
        console.log("Cadastrado com sucesso");
    }
    catch (error) {
        console.log(error);
    }
});
newSubscribe("5454845454", "lais", "laislais@lais.lais");
function getAllNotifications() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield getUsers();
        const promisesArray = [];
        for (let user of users) {
            promisesArray.push(axios_1.default.get(`${baseUrl}/subscribers/${user.id}/notifications/all`));
            const result = yield Promise.all(promisesArray);
            const dataFromResult = result.map((res) => res.data);
            return dataFromResult;
        }
    });
}
getAllNotifications();
//# sourceMappingURL=index.js.map