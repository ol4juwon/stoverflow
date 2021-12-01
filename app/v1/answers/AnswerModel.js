"use strict"

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const answerSchema = mongoose.Schema({
    answer: {type: String, required: true},
    questionId: {type: String, required:true},
    username: {type: String, required: true},
    upVotes: {type: Number, default: 0},
    downVotes: {type: Number, default: 0},
},{
    toJson: {
        transform:  (doc, ret) => {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    },
    timestamps: true
})
answerSchema.post("save", function(answer) {
    
    console.log("Question saved", answer)
    
}
)
answerSchema.index({"$**": "text"});
answerSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Answer', answerSchema);