const express = require("express")
const { BookModel } = require("../model/bookModel")

const bookRoute = express()




bookRoute.get("/",async(req,res)=>{
    var data = await BookModel.find()
    res.json(data)
})


bookRoute.post("/",async (req,res)=>{
    const data = req.body;
    try {
        var newData =await BookModel.insertMany([data])
        console.log(newData)
        res.json("Updated")
    } catch (error) {
        console.log(error)
        res.json("Something went wrong on update route")
    }
})



bookRoute.delete("/:id",async (req,res)=>{
    const data = req.params.id;
    try {
        var newData =await BookModel.deleteOne({_id:data})
        console.log(newData)
        res.json("delete")
    } catch (error) {
        console.log(error)
        res.json("Something went wrong on delete route")
    }
})


bookRoute.get("/filter/:genre",async (req,res)=>{
    const data = req.params.genre;
    try {
        var newData =await BookModel.find({Genre:data})
        console.log(newData)
        res.json(newData)
    } catch (error) {
        console.log(error)
        res.json("Something went wrong on delete route")
    }
})


bookRoute.get("/sort/:sort",async (req,res)=>{
    const data = req.params.sort;
    console.log(data)
    try {
        if(data=="lower"){
        var newData =await BookModel.find().sort({Price:1})
        }else{
            var newData =await BookModel.find().sort({Price:-1})
        }
        res.json(newData)
    } catch (error) {
        console.log(error)
        res.json("Something went wrong on delete route")
    }
})




module.exports = {bookRoute}