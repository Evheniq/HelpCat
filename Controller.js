const catImg = require("./catImg.js"),
    getRandomArbitrary = require('./utils.js')

class CatController {

    async addCat(req, res){
        try {
            const {url} = req.body
            const cat = await catImg.create({url})
            res.json(cat)
        } catch (e) {
            res.status(500).json(e)
        }
    }


    async showCat(req, res){
        try {
            if (!req.query.idCat){
                const cats = await catImg.find()
                res.redirect('/?idCat=' + getRandomArbitrary(0, cats.length))
                res.end()
            }

            const cats = await catImg.find()

            res.render('index', {catImg: cats[req.query.idCat], visits: req.cookies.visits})
        } catch (e) {
            res.status(500).json(e)
        }
    }


    async next(req, res){
        try {
            const cats = await catImg.find()
            res.redirect('/?idCat=' + getRandomArbitrary(0, cats.length))
        } catch (e) {
            res.status(500).json(e)
        }
    }


    async updateCat(req, res){
        try {
            if(!req.body._id){
                res.status(400).json({message: '_id not found'})
            }
            const updateCat = await catImg.findByIdAndUpdate(req.body._id, req.body.newUrl, {new: true})
            res.json(updateCat)
        } catch (e) {
            res.status(500).json(e)
        }
    }


    async delCat(req, res){
        try {
            if(!req.body._id){
                res.status(400).json({message: '_id not found'})
            }
            const deletedCat = await catImg.findByIdAndDelete(req.body._id)
            res.json(deletedCat)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new CatController()