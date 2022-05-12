"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var _a = require("../controllers/user"), getUser = _a.getUser, postCreateUser = _a.postCreateUser;
/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getUser);
router.post("/", postCreateUser);
module.exports = router;
