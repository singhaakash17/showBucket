import express from 'express';
const router = express.Router();

const {
    getUser,
    postCreateUser
} = require("../controllers/user");
/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/",getUser);

router.post("/",postCreateUser);


module.exports = router;

