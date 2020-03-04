const express = require('express');
const { body } = require('express-validator')
const router = express.Router();

const authController = require('./authController');

router.post('/login', [
    body('username')
    .trim()
    .isLength({ min: 6, max: 100})
    .withMessage('Username and password must have at least 6 characters and maximum 100 characters')
], authController.login);

module.exports = router;