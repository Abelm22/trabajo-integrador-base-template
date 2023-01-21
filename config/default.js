require('dotenv').config();
const {MONGO_USER, MONGO_PASS} = process.env;

module.exports = {
    databases: {
        mongodb: {
            connectionString: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster1.32lbhqp.mongodb.net/?retryWrites=true&w=majority`
        }
    }
}