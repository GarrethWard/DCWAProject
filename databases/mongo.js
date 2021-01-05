const mongoose = require('mongoose');

var connection = mongoose.connect("mongodb://localhost:27017/stateheads", {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) {
        console.log(err);
        return
    }

    console.log("connected to mongoose!");
})

var headSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    headOfState: { type: String, required: true }
})

const Heads = mongoose.model("heads", headSchema);

module.exports.Head = Heads