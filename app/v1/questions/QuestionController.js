"use strict"

const questService = require('./QuestionService.js');
const answers = require('../answers/AnswerService')
const redis = require("redis")
const redisClient = redis.createClient("redis://localhost:6379")

exports.getAll = async (req, res) =>  {
    const {error,data} = await questService.getAllQuestions();
    redisClient.exists("Questions",  (error, result) =>{
        if(result){
        console.log(result)}else{
            console.log(error)
        }
    }).catch()
    if(error) return createErrorResponse(res, error);

    return createSuccessResponse(res, data);
}

exports.getById = async (req, res) => {
    const id = req.params.id;
    const {error,data} = await questService.getQuestionById(id);
    
    if(error) return createErrorResponse(res, error);
    const answersForId = await answers.getAnswerByQuestionID(id)
    // console.log("for id ",answersForId.data)
    if(answersForId.error) data.answers = "Error Fetching answers";

// data = {...data, answers: answersForId.data}1
        return createSuccessResponse(res,{result: {question: data, answers: answersForId.data}},200 );
}
exports.postQuestion  = async (req, res) => {
    const payload = req.body 
        const {error,data} = await questService.postQuestion(payload);
    if(error) return createErrorResponse(res, error);

    return createSuccessResponse(res, data);
}