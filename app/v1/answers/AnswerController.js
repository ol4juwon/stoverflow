"use strict"
const answerService = require("./AnswerService")

exports.postAnswer = async (req,res) => {
    const id = req.params.id;
    const {answer, username} = req.body
    const {error, data } = await answerService.postAnswer(id,username,answer);
    if(error) return createErrorResponse(res, error, 400)

    return createSuccessResponse( res, data, 200)
}