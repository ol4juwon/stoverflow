"use strict"

const answers = require('./AnswerModel');

exports.postAnswer = async (questionID, username, answer) => {
    const newAnswer = new answers({
        username: username,
        answer,
        questionID
    });
    const ans =  await newAnswer.save();
    if(ans.error) return { error: ans.error };
    return {data: ans}
}
exports.getAnswerByQuestionID = async (questionID) => {
    const ans = await answers.find({questionID});
    if(ans.error) return { error: ans.error };
    return {data: ans}
}