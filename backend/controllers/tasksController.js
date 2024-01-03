const pool = require("../../database/dbConfig");

const getAllTasks = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tasks");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = req.body;
    console.log("Received data from frontend:", newTask);

    if (!newTask || !newTask.text) {
      return res.status(400).json({ error: "Invalid data received" });
    }

    const [result] = await pool.query("INSERT INTO tasks SET ?", newTask);

    // Log the inserted row ID
    console.log("Inserted task ID:", result.insertId);

    res.status(201).json({ id: result.insertId, ...newTask });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const completeTask = async (req, res) => {
  try {
    const taskId = parseInt(req.params.taskId);
    const [result] = await pool.query(
      "UPDATE tasks SET completed = true WHERE id = ?",
      [taskId]
    );

    if (result.affectedRows > 0) {
      res.json({ message: "Task completed successfully" });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    console.error("Error completing task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = parseInt(req.params.taskId);
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      taskId,
    ]);

    if (result.affectedRows > 0) {
      res.json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  completeTask,
  deleteTask,
};
