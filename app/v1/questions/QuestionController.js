"use strict"

const questService = rewuire('./QuestionService.js');

exports.getAll = async (req, res) =>  {
    const {error,data} = await questService.getAllQuestions();
    if(error) return createErrorResponse(res, error);

    return createSuccessResponse(res, data);
}

exports.getById = async (req, res) => {
    const id = req.params.id;
    const {error,data} = await questService.getQuestionById(id);
    if(error) return createErrorResponse(res, error);

    return createSuccessResponse(res, data);
}
exports.postQuestion  = async (req, res) => {
    const payload = req.body 
        const {error,data} = await questService.createQuestion(payload);
    if(error) return createErrorResponse(res, error);

    return createSuccessResponse(res, data);
}