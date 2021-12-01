"use strict"

const answers = require('./AnswerModel');

exports.postAnswer = async (questionId, username, answer) => {
    const newAnswer = new answers({
        username: username,
        answer,
        questionId
    });
    const ans =  await newAnswer.save();
    if(ans.error) return { error: ans.error };
    return {data: ans}
}
exports.getAnswerByQuestionID = async (questionID) => {
    const ans = await answers.find({questionId: questionID},{
        _id: 0, __v: 0
    });
    // console.log("answers",ans )
    if(ans.error) return { error: ans.error };
    return {data: ans}
}