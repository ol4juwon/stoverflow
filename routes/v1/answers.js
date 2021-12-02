"use strict";	
const router = require('express').Router();

const answerController = require("../../app/v1/answers/AnswerController");
// const answerValidator = require("../../app/v1/answers/answerValidator");

// router.get('/', answerController.getAnswers);
// router.get('/question/:id', answerController);
router.post('/question/:id', answerController.postAnswer);
// router.put('/:id', answerValidator.validateAnswer, answerController.updateAnswer);
// router.delete('/:id', answerController.deleteAnswer);

module.exports = router;   // Export the router