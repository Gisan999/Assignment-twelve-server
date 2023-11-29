const deleteEmployee = require('../../api/controller/deleteEmployee');
const getEmployee = require('../../api/controller/getEmployee');
const postEmployee = require('../../api/controller/postEmployee');


const router = require('express').Router()

router.post('/set/employee', postEmployee)
router.get('/get/employee', getEmployee)
router.delete('/delete/employee/:id', deleteEmployee)

module.exports = router;