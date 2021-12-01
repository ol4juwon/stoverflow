"use strict"

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const answerSchema = mongoose.Schema({
    answer: {type: String, required: true},
    username: {type: String, required: true},
    upVotes: {type: Number, default: 0},
    downVotes: {type: Number, default: 0},
},{
    toJson: {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret.__v;
            return ret;
        }
    },
    timestamps: true
})
answerSchema.post('save', function(error, doc, next) {
    if(error) console.log(error);
    console.log(doc);
})
answerSchema.index({"$**": "text"});
answerSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Answer', answerSchema);