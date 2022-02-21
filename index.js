import express from 'express'
import path from 'path'
// import {findUrlCat, addUrlCat} from './db_access.js'
import mongoose from 'mongoose'
import catImg from './catImg.js'
import {getRandomArbitrary} from './utils.js'

// const cookieParser = require('cookie-parser')

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()
const strConnect = process.env.CONNECT_STR || 'mongodb+srv://root:FrgHRdkr8AIcou36@cluster0.jxfta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'static'))

app.use(express.static('static'))
app.use(express.json())

app.get('/', async (req, res) => {
    await findUrlCat().then(catArray => {
        res.redirect(`/${getRandomArbitrary(0, catArray.length)}`)
    })
})

app.get('/:idCat', async (req, res) => {
    // await findUrlCat(req.params.idCat).then(catObj => {
    //     res.render('index', {countVisits: 12, catImg: catObj})
    // }).catch(e => {
    //     console.error(e)
    //     res.redirect('/')
    // })

    console.log(req.params)
})


app.post('/addCat', async (req, res) => {
    const {url} = req.body

})


async function startApp() {
    try {
        await mongoose.connect(strConnect)
        app.listen(PORT, () => {
            console.log(`Server start at port: ${PORT}...`)
        })
    } catch (e) {
        console.error(e)
    } 
}

