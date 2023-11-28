const getAdminAsset = require('../../api/controller/getAdmitAsset')
const postAdminAsset = require('../../api/controller/postAdminAsset')
const verifyAdmin = require('../../middleware/verifyAdmin')
const verifyToken = require('../../middleware/verifyToken')

const router = require('express').Router()

router.post('/set/asset', verifyToken, verifyAdmin, postAdminAsset )
router.get('/get/asset', verifyToken, verifyAdmin, getAdminAsset)

module.exports = router