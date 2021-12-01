"use strict"
const mongoose = require("mongoose")
const monogoosePaginate = require("mongoose-paginate")
const questionSchema  =  mongoose.Schema({
    username: {type: String, required: true},
    question: {type: String, required: true},
    category: {type: String, required: true},
    tags: {type: Array, required: true},
    
},
{
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    },
    tiestamps: true,
}
)
questionSchema.post("save", function(question) {
    
    console.log("Question saved", question)
    
}
)
questionSchema.index({"$**": "text"})
questionSchema.plugin(monogoosePaginate)
module.exports = mongoose.model("Question", questionSchema)
