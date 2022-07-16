const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve (__dirname, 'config.env')});

mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true
        }).then(()=>{
        console.log(`mongo db connected`);
        })
