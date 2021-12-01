"use strict"

const questService = rewuire('./QuestionService.js');

exports.getAll = async (req, res) =>  {
    const {error,data} = await questService.getAllQuestions();
    if(error) return createErrorResponse(res, error);

    return createSuccessResponse(res, data);
}