const mongoose = require("mongoose");
const config = require("config");
const {connectionString} = config.get('databases.mongodb')

async function connectMongoDb(){
    return mongoose.connect(connectionString)
}

module.exports = { connectMongoDb }