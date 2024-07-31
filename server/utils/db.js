const mongoose = require('mongoose')

const URL = "mongodb://127.0.0.1:27017/MERN_PROJECT";

const connection = async (req,res) => {
    try {
        await mongoose.connect(URL);
        console.log("Connection successfull...")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;