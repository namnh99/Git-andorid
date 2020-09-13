const Router = require('express').Router()
const authControler = require('../controllers/auth')
const {requireLogin, requireRole } = require('../middlewares/auth')

Router.post('/login', authControler.login )

Router.get('/getme', requireLogin, requireRole('ADMIN') ,authControler.getMe)

module.exports = Router;