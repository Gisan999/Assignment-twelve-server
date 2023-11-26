const createJwt = require('../../api/controller/jwtPost');

const router = require('express').Router()

router.post('/jwt', createJwt)

module.exports = router;