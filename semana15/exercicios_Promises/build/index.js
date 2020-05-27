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
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
const allSubscribers = () => __awaiter(void 0, void 0, void 0, function* () {
    const subscribers = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    return subscribers.data.map((res) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        };
    });
});
function createNews(title, content, date) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios_1.default.put(`${baseUrl}/news`, {
            title,
            content,
            date
        });
    });
}
;
const getSubscriberQuantity = () => __awaiter(void 0, void 0, void 0, function* () {
    const subscribers = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    return subscribers.data.length;
});
const sendNotifications = (users, message) => __awaiter(void 0, void 0, void 0, function* () {
    const promiseArray = [];
    for (const user of users) {
        promiseArray.push(axios_1.default.post(`${baseUrl}/notifications/send`, {
            subscriberId: user.id,
            message: message,
        }));
        console.log("Notificação de: ", user.name);
    }
    ;
    yield Promise.all(promiseArray);
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const getAllSubscribers = yield allSubscribers();
    console.log(getAllSubscribers);
    yield createNews("Hamilton saiu do Frontend", "Para a alegria de muitos, e a tristeza de alguns, a turma Hamilton está, agora, no backend!", 1589818936000);
    const arrayUsers = yield getSubscriberQuantity();
    sendNotifications(getAllSubscribers, "Olá");
    console.log(sendNotifications);
});
main();
//# sourceMappingURL=index.js.map