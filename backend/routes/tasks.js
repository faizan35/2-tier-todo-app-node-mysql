const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

// Define routes
router.get("/", tasksController.getAllTasks);
router.post("/", tasksController.createTask);
router.put("/:taskId", tasksController.completeTask);
router.delete("/:taskId", tasksController.deleteTask);

module.exports = router;
