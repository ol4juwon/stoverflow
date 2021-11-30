"use strict"
const router = require('express').Router();

const commentsController = require('../../app/v1/comments/commentsController')
const commentsValidator = require('../../app/v1/comments/commentsValidator')

router.get('/', commentsController.getComments )
router.post('/', commentsValidator.validateComment, commentsController.createComment )
router.get('/:id', commentsController.getComment )
router.put('/:id', commentsValidator.validateComment, commentsController.updateComment )
router.delete('/:id', commentsController.deleteComment )
module.exports = router;