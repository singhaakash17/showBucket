import express from 'express';
const router = express.Router();
const auth = require("../middleware/auth");
const {
    getAllShows,
    postCreateShow,
    putUpdateShow,
    deleteShow,
    getShowById
} = require("../controllers/show");
/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/",auth,getAllShows);


router.get("/:id",auth,getShowById);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/",auth,postCreateShow);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id",auth,putUpdateShow);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id",auth,deleteShow);

module.exports = router;

