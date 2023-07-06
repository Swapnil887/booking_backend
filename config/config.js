const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://swapnil:swapnil@cluster0.tush2vw.mongodb.net/books_Backend?retryWrites=true&w=majority")

module.exports = {connection}