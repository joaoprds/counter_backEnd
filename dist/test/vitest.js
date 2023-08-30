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
exports.testCases = void 0;
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const assert_1 = __importDefault(require("assert"));
function testCases() {
    (0, vitest_1.test)('Increment counter', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/pageview/test');
        const body = response.text;
        assert_1.default.strictEqual(response.headers['content-type'], 'text/plain; charset=utf-8');
        assert_1.default.strictEqual(Number(body), 1);
    }));
}
exports.testCases = testCases;
