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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// controllers/todo.js
var User = require("../models/user");
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
exports.getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, match, accessToken, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User.findOne({ username: req.query.username })];
            case 1:
                user = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 6, , 7]);
                if (!user) return [3 /*break*/, 4];
                return [4 /*yield*/, bcrypt.compare(req.query.password, user.password)];
            case 3:
                match = _a.sent();
                accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_KEY);
                if (match) {
                    res.json({ accessToken: accessToken });
                }
                else {
                    res.json({ message: "Invalid Credentials" });
                }
                return [3 /*break*/, 5];
            case 4:
                res.json({ message: "Username not found" });
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.postCreateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, old, hashedPassword, user_1, savedUser, e_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, User.findOne({ username: username })];
            case 1:
                old = _b.sent();
                if (old) {
                    return [2 /*return*/, res.status(409).json({
                            "message": "User Already Exist. Please Login",
                            "error": 409
                        })];
                }
                _b.label = 2;
            case 2:
                _b.trys.push([2, 5, , 6]);
                return [4 /*yield*/, bcrypt.hash(req.body.password, 10)];
            case 3:
                hashedPassword = _b.sent();
                user_1 = new User({
                    username: req.body.username,
                    password: hashedPassword,
                });
                return [4 /*yield*/, user_1.save()];
            case 4:
                savedUser = _b.sent();
                res.json(savedUser);
                return [3 /*break*/, 6];
            case 5:
                e_2 = _b.sent();
                res.json({
                    message: "Error",
                    data: undefined
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
