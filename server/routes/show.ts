import express from 'express';
const router = express.Router();
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
router.get("/",getAllShows);


router.get("/:id",getShowById);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/",postCreateShow);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id",putUpdateShow);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id",deleteShow);

module.exports = router;

