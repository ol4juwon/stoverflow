"use strict";	
const router = require('express').Router();

const answerController = require("../../app/v1/answers/answerController");
const answerValidator = require("../../app/v1/answers/answerValidator");

// router.get('/', answerController.getAnswers);
router.get('/:id', answerController.getAnswer);
router.post('/:id', answerValidator.validateAnswer, answerController.createAnswer);
router.put('/:id', answerValidator.validateAnswer, answerController.updateAnswer);
router.delete('/:id', answerController.deleteAnswer);

module.exports = router;   // Export the router