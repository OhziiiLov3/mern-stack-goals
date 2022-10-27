const dotenv = require('dotenv').config()
const colors = require('colors');
const express = require('express');
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3001
const app = express();

connectDB()


// DATABASE CONNECTION 

// const db = mongoose.connection
// db.on('error',(error)=>console.error(error));
// db.once('open',()=>console.log('Connected to Database'));

app.use(express.json());
app.use(express.urlencoded({extended: false}))



app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

const friendsRouter = require('./routes/friends');
app.use('/friends',friendsRouter);

app.listen(PORT,()=>{
    console.log(`You are connected to Port ${PORT}`);
})

