import mongoose from "mongoose";

const ShowSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    streaming_app: {
        type: "String"
    },
    rating:{
        type:"Number"
    },
    review:{
        type:"String"
    }
});

const Show = mongoose.model("show", ShowSchema);

module.exports = Show;



