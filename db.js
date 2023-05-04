const mongoose = require('mongoose');
const DB_URI = "mongodb+srv://<>:<>@cluster0.0lmql.mongodb.net/test";

const conn = mongoose.connect(DB_URI, {
  autoCreate: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Successfully connected to mongo');
}).catch((err) => {
    console.log(err);
    throw err;
})

module.exports = conn; 