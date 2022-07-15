// const exp = require('constants');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve (__dirname, 'config.env')});
         mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true
        }).then(()=>{
        console.log(`mongo db connected`);
        })

    // catch(err){
    //     console.log(err);
    //     process.exit(1);
    // }
    
// module.export=connectDB;