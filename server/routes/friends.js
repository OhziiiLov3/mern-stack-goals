
const express = require ('express');
const router = express.Router();
const Friend = require('../models/Friends')


// INSERT INTO DB

router.get('/insert', async (req,res)=>{
    const friend = new Friend({name:"Ohz",age:31});
     await friend.save();
     res.send('Inserted Data')   
});


module.exports = router; 
