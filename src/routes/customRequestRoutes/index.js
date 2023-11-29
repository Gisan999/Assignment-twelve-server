const requestPost = require('../../api/controller/postCustomRequest');

const router = require('express').Router()


router.post('/set/request', requestPost)

module.exports = router;