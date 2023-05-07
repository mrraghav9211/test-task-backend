const mongoose = require('mongoose');

const connectDB = async (req, res)=>{
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect('mongodb+srv://mrraghav9412:rkraghav9211@cluster0.buktlp8.mongodb.net/?retryWrites=true&w=majority')
        console.log("mongoDB Connected succesfuly")
    } catch (error) {
        console.log(err.message);
        process.exit();
    }

}

module.exports = connectDB