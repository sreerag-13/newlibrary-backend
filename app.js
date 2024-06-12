const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(cors())

app.post("/",(req,res)=>{
    res.send("hello")
})
app.post("/view",(req,res)=>{
    res.send("view done")
})
app.post("/search",(req,res)=>{
    res.send("search done")
})


app.listen(1001,()=>{
    console.log("server start")
})