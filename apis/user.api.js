const { signup, signin } = require('../service/user.service')
const { userValidation } = require('../validation/user.validation')

const app = require('express').Router()


app.post('/signup',userValidation,signup)
app.post('/signin',signin)

module.exports = app