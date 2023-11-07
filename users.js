const express = require('express')
const router = express.Router()

const usercontroller = require('./controller/user')

router.get('/Users', usercontroller.index)

  router.post('/User', usercontroller.store)

  router.put('/user/:id', usercontroller.update)

  router.delete('/user/:id', usercontroller.delete)

  module.exports = router