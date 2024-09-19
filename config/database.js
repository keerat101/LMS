const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect('mongodb+srv://kashishbh21:kashishbh21@cluster0.wbqgr9y.mongodb.net/StudyNotion', {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};