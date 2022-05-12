require("dotenv").config(); 
const express = require("express");
const app = express();
const dbConnect = require('./config/db')
const show = require("./routes/show");
const user = require("./routes/user");

const cors=require('cors');
// initialize middleware
app.use(cors());
app.use(express.json({ extended: false }));


app.get("/", (req:any, res:any) => res.send("Server up and running"));

app.use("/api/show",show)
app.use("/api/user",user)
// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
    dbConnect();
});