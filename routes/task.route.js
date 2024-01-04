const express = require("express");
const {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controller");
const router = express.Router();

//here is for compressing bellow code into few code
// router.route("/").get(getAllTasks).post(createTask);
// router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

//create task
router.post("/", createTask);
// getAll tasks and Single
router.get("/", getAllTasks);
router.get("/:id", getTask);
//delete and update Task
router.delete("/:id", deleteTask);
// router.put("/api/task/:id", updateTask);
router.put("/:id", updateTask);

module.exports = router;
