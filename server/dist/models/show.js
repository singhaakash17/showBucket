"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ShowSchema = new mongoose_1.default.Schema({
    title: {
        type: "String",
        required: true,
    },
    streaming_app: {
        type: "String"
    },
    rating: {
        type: "Number"
    },
    review: {
        type: "String"
    }
});
var Show = mongoose_1.default.model("show", ShowSchema);
module.exports = Show;
