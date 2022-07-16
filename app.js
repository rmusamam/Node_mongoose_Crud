const express = require("express");

const dotenv = require("dotenv");

const path = require('path');
const app= express();
// require('dotenv').config({ path: './config/config.env'})
require('dotenv').config({ path: path.resolve(__dirname, 'config/config.env') })

const port = process.env.PORT ;
console.log(port);
 require('./config/db');
// dotenv.config('./config/.env');

//load Config

// dotenv.config({path:'./config/config.env'});
// connectDB();

app.listen(port, () => {
    console.log(`server is active now ${port}`);
});
app.get('/',(req,res)=>{
    res.send('server Activate')
})