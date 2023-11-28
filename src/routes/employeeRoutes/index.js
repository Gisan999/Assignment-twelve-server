const postEmployee = require('../../api/controller/postEmployee');


const router = require('express').Router()

router.post('/set/employee', postEmployee)

module.exports = router;