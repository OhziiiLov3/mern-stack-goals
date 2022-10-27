const express = require("express");
const router = express.Router();
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal
 } = require("../controllers/goalController");


// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)

// GET GOALS
router.get('/', (getGoals))

//POST
router.post('/', (setGoal))

// PUT - Update 
router.put('/:id', (updateGoal)) 

// Delete
router.delete('/:id', (deleteGoal))

module.exports = router;
