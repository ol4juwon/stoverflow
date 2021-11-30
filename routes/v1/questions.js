"use strict" 
const router = require('express').Router();

const questionController = require('../../app/v1/questions/QuestionController');
const questionValidator = require('../../app/v1/questions/QuestionValidator');

router.get('/', questionController.getAll);
router.get('/:id', questionController.getById);
router.post('/', questionValidator.validate, questionController.create);
router.put('/:id', questionValidator.validate, questionController.update);
router.delete('/:id', questionController.delete);

module.exports = router;