"use strict"
const mongoose = require("mongoose")
const Question = require('./QuestionModel')

exports.postQuestion = async  (payload) =>{
    const {question,username, category,tags} = payload;
    const newQuestion = new Question({question,username, category, tags});
    const saveQuestion = await newQuestion.save();
    const {error} = saveQuestion;
    if (error) return { error :  error.message}
    return {data: saveQuestion}
}
exports.getQuestionById = async (id) =>{
    const question  =await  Question.findById(id);
console.log("id:",id, question)
    if(question.error)return {error: question.error}

    return  {data: question}
}
exports.deleteQuestion = async (id) =>  {
const delQuestion = await Question.findByIdAndDelete(id);
if(delQuestion.error)return {error: delQuestion.error}
return {data: delQuestion}
}

exports.getAllQuestions = async () =>{
const questions = await Question.find();
if(questions.error)return {error: questions.error}
return {data: questions}
}