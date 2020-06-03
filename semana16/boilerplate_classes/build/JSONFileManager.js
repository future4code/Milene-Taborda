"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONFileManager = void 0;
const fs = require("fs");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeObjectToFile(bank) {
        fs.writeFileSync(this.fileName, JSON.stringify(bank, null, 2));
    }
    getObjectFromFile() {
        return JSON.parse(fs.readFileSync(this.fileName).toString());
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map