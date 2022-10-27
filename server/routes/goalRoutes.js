const express = require("express");
const router = express.Router();
const {
  getGoals,
  getGoalById,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)

// GET GOALS
router.get("/", getGoals);
router.get("/:id", getGoalById)

//POST
router.post("/", setGoal);

// PUT - Update
router.put("/:id", updateGoal);

// Delete
router.delete("/:id", deleteGoal);

module.exports = router;
