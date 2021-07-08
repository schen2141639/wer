const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("h");
});

var uploadSchema = new mongoose.Schema({
    imagename: String
})

var uploadModel = mongoose.model('image', uploadSchema)

module.exports = uploadModel