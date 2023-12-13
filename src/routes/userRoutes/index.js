const adminCheck = require('../../api/controller/adminCheck');
const getUser = require('../../api/controller/getUser');
const postUser = require('../../api/controller/postUser');
const updateUser = require('../../api/controller/updateUser');
const userData = require('../../api/controller/userData');
const verifyAdmin = require('../../middleware/verifyAdmin');
const verifyToken = require('../../middleware/verifyToken');

const router = require('express').Router()

router.get('/get/users', getUser)
router.post('/set/users', postUser)
router.get('/users/admin/:email', adminCheck)
router.get('/users/data/:email', userData)
router.patch('/update/users/:id', verifyToken, verifyAdmin, updateUser)
module.exports = router;