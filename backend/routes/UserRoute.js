const express = require('express')
const router = express.Router()
const { createUser, login, userDetail, postEmailConfirmation, forgetPwd, resetPwd, signOut, userList, requireUser } = require('../controllers/UserController')   // while importinfg function use {}
const { userValidation, validation } = require('../validation/Validation')

//const upload = require('../middleware/fileUpload')

//router.post('/createUser', upload.single('image'), userValidation, validation, createUser)
router.post('/createUser', userValidation, validation, createUser)
router.put('/confirmation/:token', postEmailConfirmation)    //req.param. paxi j xa tei lekhna parxa "token"
router.post('/login', login)
router.get('/userdetails/:id', userDetail)
router.post('/forgetpwd', forgetPwd)
router.put('/resetpassword/:token', resetPwd)
router.post('/signout', signOut)
router.get('/userlist', userList)

module.exports = router