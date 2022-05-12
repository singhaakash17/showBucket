// controllers/todo.js
const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getUser = async (req: any, res: { json: (arg0: any) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; error: any; }): any; new(): any; }; }; }) => {
    
    const user = await User.findOne({ username: req.query.username });
    try{
        if(user){
        const match = await bcrypt.compare(req.query.password, user.password);
        const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_KEY)
        if(match){
            res.json({ accessToken: accessToken });
        } else {
            res.json({ message: "Invalid Credentials" });
        }}
        else{
            res.json({ message: "Username not found" });
        }
    }catch(e) {
        console.log(e)
    }
};
exports.postCreateUser = async(req: { body: any; }, res: { json: (arg0: { message: string; data: any; }) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; error: any; }): any; new(): any; }; }; }) => {
    const {username,password} = req.body;
    const old=await User.findOne({username});
    
    if(old)
    {
        return res.status(409).json({
    "message": "User Already Exist. Please Login",
    "error": 409
});
    }
    try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        password: hashedPassword,
    });
    const savedUser = await user.save();
    res.json(savedUser);
} catch(e) {
    res.json({
    message: "Error",
    data: undefined
});
}
};