const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    router = require('./router.js'),
    cookieParser = require('cookie-parser')


const PORT = process.env.PORT ?? 3000
const strConnect = process.env.CONNECT_STR


app.set('view engine', 'ejs')
// app.set('views', path.resolve(__dirname, './static'))


app.use(express.static('static'))
app.use(express.json())
app.use(cookieParser('sdfsdf235423sa'))
app.use((req, res, next) => {
    if(req.query.idCat){
        const visits = req.cookies.visits || 0
        console.log(visits)
        res.cookie('visits', parseInt(visits) + 1)
    }
    next()
})
app.use('/', router)


async function startApp() {
    try {
        await mongoose.connect(strConnect)
        app.listen(PORT, () => {
            console.log(`At port: ${PORT}...`)
        })
    } catch (e) {
        console.error(e)
    } 
}

startApp().then(() => {
    console.log('Server start')
}).catch((e) => {
    console.log(e)
})
