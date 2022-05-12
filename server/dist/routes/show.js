"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var _a = require("../controllers/show"), getAllShows = _a.getAllShows, postCreateShow = _a.postCreateShow, putUpdateShow = _a.putUpdateShow, deleteShow = _a.deleteShow, getShowById = _a.getShowById;
/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllShows);
router.get("/:id", getShowById);
/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateShow);
/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateShow);
/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteShow);
module.exports = router;
