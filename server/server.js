const dotenv = require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();
const mongoose = require ('mongoose')



// DATABASE CONNECTION 
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error',(error)=>console.error(error));
db.once('open',()=>console.log('Connected to Database'));

app.use(express.json());
app.use(express.urlencoded({extended: false}))



app.use('/api/goals', require('./routes/goalRoutes'))

const friendsRouter = require('./routes/friends');
app.use('/friends',friendsRouter);

app.listen(PORT,()=>{
    console.log(`You are connected to Port ${PORT}`);
})

