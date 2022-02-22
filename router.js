const Router = require("express"),
    CatController = require("./Controller.js")


const router = new Router()


router.post('/addCat', CatController.addCat)
router.get('/', CatController.showCat)
router.get('/next', CatController.next)
router.put('/', CatController.updateCat)
router.delete('/', CatController.delCat)


module.exports = router