// const getRequest = require('../../api/controller/getRequest');
// const postRequest = require('../../api/controller/postRequest');

const getRequest = require('../../api/controller/getRequest');
const postRequest = require('../../api/controller/postRequest');

const router = require('express').Router()

router.post('/set/request', postRequest)
router.get('/get/request', getRequest)

module.exports = router;