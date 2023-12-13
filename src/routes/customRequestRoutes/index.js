const getCustomRequest = require('../../api/controller/getCustomRequest');
const singleRequest = require('../../api/controller/getSingleRequest');
const requestPost = require('../../api/controller/postCustomRequest');

const router = require('express').Router()

router.post('/set/request', requestPost)
router.get('/get/request', getCustomRequest)
router.get('/get/request/:id', singleRequest)

module.exports = router;