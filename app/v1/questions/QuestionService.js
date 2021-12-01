"use strict"
const mongoose = require("mongoose")
const Question = require('./QuestionModel')

exports.postQuestion = async  (payload) =>{
    const {question,userId, category} = payload;
    const newQuestion = new Question({question,userId, category});
    const saveQuestion = await newQuestion.save();
    const {error} = saveQuestion;
    if (error) return { error :  error.message}
    return {data: saveQuestion}
}
exports.getQuestionById = async (id) =>{
    const question  = Question.findById(id);

    if(question.error)return {error: question.error}

    return  {data: question}
}
exports.deleteQuestion = async (id) =>  {

    return {data: "deleted"}	
}

exports.getAllQuestion = async () =>{

    return {data: "all questions"}	
}