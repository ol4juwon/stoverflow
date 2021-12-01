"use strict"

const questService = require('./QuestionService.js');
const answers = require('../answers/AnswerService')
const redis = require("redis")
const redisClient = redis.createClient({port: 6379, host: 'localhost'});

exports.getAll = async (req, res) =>  {
    redisClient.on("error", function (err) { console.log("Error " + err); });
    redisClient.on("ready", function () { console.log("Redis is ready"); });	
    // redisClient.get("questions", async (_, questions) => {
    //     if (questions) {
    //         console.log("from redis")
    //         return createSuccessResponse(res, JSON.parse(questions));
    //     }
    //     const {error,data} = await questService.getAllQuestions();
    //     if(error) return createErrorResponse(res, error);
    //     redisClient.set("questions", JSON.stringify(data));
    //     return createSuccessResponse(res, data);
    // })
 
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