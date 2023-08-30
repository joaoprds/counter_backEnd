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
const express_1 = __importDefault(require("express"));
const counter_1 = require("./counter");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get('/pageview/:key', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { key } = req.params;
    console.log(`Received request for key: ${key}`);
    const startTime = Date.now();
    const counter = yield (0, counter_1.incrementCounter)(key);
    const endTime = Date.now();
    const runtime = endTime - startTime;
    console.log(`Counter for key ${key} is now: ${counter}`);
    console.log(`Request processed in ${runtime}ms`);
    res.setHeader('X-Runtime', runtime.toString());
    res.setHeader('Content-Type', 'text/plain');
    res.send(counter.toString());
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
