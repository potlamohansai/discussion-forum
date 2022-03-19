const mongoose = require('mongoose');

const url= "mongodb://mohan:8500761954@discussionforumproject-shard-00-00.3q12e.mongodb.net:27017,discussionforumproject-shard-00-01.3q12e.mongodb.net:27017,discussionforumproject-shard-00-02.3q12e.mongodb.net:27017/discussion-forum-data?ssl=true&replicaSet=atlas-war7g0-shard-0&authSource=admin&retryWrites=true&w=majority";


module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB connected successfully")
    }).catch((error) => console.log("Error: ",error))
}