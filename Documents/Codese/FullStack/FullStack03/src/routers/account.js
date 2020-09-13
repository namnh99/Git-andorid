const Route = require('express').Router()
const acccountControler = require('../controllers/account')

Route.post('/',acccountControler.create)
Route.get('/',acccountControler.getAll)
Route.get(':username',acccountControler.getByName)
Route.put('/:username',acccountControler.updateByName)
Route.delete('/:username', acccountControler.deleteByName)

module.exports = Route;