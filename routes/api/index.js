const express =require('express')
const router = require('router')

const adminRouter = require('/admin')

router.use('/admin', adminRouter)

module.exports = router