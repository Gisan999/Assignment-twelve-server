const adminCheck = require('../../api/controller/adminCheck');
const getUser = require('../../api/controller/getUser');
const postUser = require('../../api/controller/postUser');

const router = require('express').Router()

router.get('/get/users', getUser)
router.post('/set/users', postUser )
router.get('/users/admin/:email', adminCheck )
module.exports = router;