"use strict"
const util = require("util")
const questService = require('./QuestionService.js');
const answers = require('../answers/AnswerService');


exports.getAll = async (req, res) =>  { 
       let questions = await cache.getAsync("questions")
       console.log("Data from cache", questions)
       if(questions) return createSuccessResponse(res, JSON.parse(questions))
    //  const cached = await cache.getAsync('questions').catch(console.log("error"))
    const {error,data} =  await questService.getAllQuestions();
    if(error) return createErrorResponse(res, error);
    const cacheResponse = await cache.setAsync("questions",JSON.stringify(data))
    console.log("cache response", cacheResponse)
    console.log("data from service", data)
    return createSuccessResponse(res, data, 200);
 
}

exports.getById = async (req, res) => {
    const id = req.params.id;
    const idQuestion = await cache.getAsync(`${id}`)
    if(idQuestion) return createSuccessResponse(res, JSON.parse(idQuestion))
    const {error,data} = await questService.getQuestionById(id);
    
    if(error) return createErrorResponse(res, error);
    const answersForId = await answers.getAnswerByQuestionID(id)
    // console.log("for id ",answersForId.data)
   
    if(answersForId.error) data.answers = "Error Fetching answers";
    const fullQuestion = {result: {question: data, answers: answersForId.data}}
    const setFull = await cache.setAsync(`${id}`, JSON.stringify(fullQuestion))
        return createSuccessResponse(res, fullQuestion,200 );
}
exports.postQuestion  = async (req, res) => {
    const payload = req.body 
        const {error,data} = await questService.postQuestion(payload);
    if(error) return createErrorResponse(res, error);

    return createSuccessResponse(res, data);
}