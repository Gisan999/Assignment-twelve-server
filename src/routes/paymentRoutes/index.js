const paymentIntent = require('../../api/controller/payment-intent')

const router = require('express').Router()

router.post('/create-payment-intent', paymentIntent)

module.exports = router