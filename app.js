const express = require("express");
const dotenv = require("dotenv");
const body_parser= require('body-parser')
const path = require('path');

const app= express();
const db=require('./config/db');

const port = process.env.PORT ;

const router=require('./routes/index');

// app.use(express.json())
app.use(body_parser.json())
app.use('/',router)

//load Config
dotenv.config({ path: path.resolve(__dirname, 'config/config.env') })

// Routes
// app.use('/',require('./routes/index'))

// console.log(router)

app.listen(port, () => {
    console.log(`server is active now ${port}`);
});
app.get('/',(req,res)=>{
    res.send('Server Activated')
})