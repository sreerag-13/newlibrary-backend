const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "BookTitle":String,
        "Price":String,
        "PublishedYear":String,
        "AuthorName":String

    }
)


let librarymodel= mongoose.model("libraries",schema);
module.exports={librarymodel}