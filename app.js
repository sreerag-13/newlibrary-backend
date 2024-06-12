const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const{librarymodel}=require("./models/library")

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://sreerag:sreerag@cluster0.onuj57g.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/",(req,res)=>{
    let input=req.body
    let library=new librarymodel(input)
    console.log(library)
    library.save()
    res.json({status:"success"})
})
app.get("/view",(req,res)=>{
    librarymodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            alert(error.message)
        }
    )
})
app.post("/search",(req,res)=>{
    let input=req.body
    librarymodel.find(input).then((data)=>{
        res.json(data)
    })
})

app.post("/delete",(req,res)=>{
    let input=req.body
    librarymodel.findByIdAndDelete(input._id).then((response)=>{
        res.json({status:"delete success"})
    })
})

app.listen(1001,()=>{
    console.log("server start")
})