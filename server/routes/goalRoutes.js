const express = require("express");
const router = express.Router();
const {
  getGoals,
  getGoalById,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const {protect } = require('../middleware/authMiddleware')

// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)

// GET GOALS
router.get("/", protect, getGoals);
router.get("/:id", protect, getGoalById)

//POST
router.post("/", protect, setGoal);

// PUT - Update
router.put("/:id", protect, updateGoal);

// Delete
router.delete("/:id", protect, deleteGoal);

module.exports = router;
