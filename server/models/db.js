const mongoose = require ('mongoose');

module.exports=mongoose.connect('mongodb://localhost:27017/todolist',
    err=>{
        if(err) console.log("err ${err}")
        console.log("mdb suceeded")
    });

    