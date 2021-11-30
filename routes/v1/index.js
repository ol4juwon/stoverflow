"use strict"

const router = require('express').Router();

const authRouter = require('./auth')
const questionRouter = require('./questions')// todo : questions router
const answerRouter = require('./answers') //  Todo answers router
const commentRouter = require('./comments')

router.use('/auth', authRouter);
router.use('/question', questionRouter);
router.use('/answer', answerRouter);
router.use('/comment',commentRouter);

module.exports  = router;