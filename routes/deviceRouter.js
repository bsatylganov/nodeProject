const Router = require('express')
const router = new Router()
const devitceController = require('../controllers/deviceController')
const deviceController = require('../controllers/deviceController')


router.post('/', devitceController.create)
router.get('/',devitceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router