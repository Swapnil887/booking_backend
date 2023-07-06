const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { connection } = require("./config/config")
const { bookRoute } = require("./routes/booksRoute")

const app = express()

app.use(express.json())
app.use(cors())
app.use("/books",bookRoute)


app.get("/",(req,res)=>{
    res.json("welcome")
})


app.listen(8080,async()=>{
    await connection;
    console.log("server is running")
})