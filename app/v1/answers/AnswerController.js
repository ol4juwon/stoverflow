"use strict"
const answerService = require('./AnswerService');

exports.postAnswer = async (req, res) => {
    const { questionId, answer, username } = req.body;
    const {error, data} = await answerService.postAnswer(questionId, username,answer);
}
// exports.AnswersByQuestionId = async (req, res) => {
//     const { questionId } = req.params;
//     const {error, data} = await answerService.getAnswersByQuestionId(questionId);
//     if(error) 
// }