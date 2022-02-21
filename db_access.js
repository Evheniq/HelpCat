// import {MongoClient} from 'mongodb'

const client = new MongoClient(strConnect)

const findUrlCat = async (id=false) => {
    try {
        await client.connect()

        const catsUrls = client.db().collection('catsUrls')

        const cats = await catsUrls.find({}).toArray()

        // client.close()

        if(id){
            return cats[id]
        } else {
            return cats
        }

    } catch (e) {
        console.log('Error: ', e)
    }
}


const addUrlCat = async (url) => {
    try {
        await client.connect()
        const catsUrls = client.db().collection('catsUrls')
        await catsUrls.insertOne({url: url})

        // client.close()

    } catch (e) {
        console.log('Error: ', e)
    }
}


// addUrlCat('7daa4b787e11f4cbeb6208771c9f13cd.jpg')
// addUrlCat('56.jpg')
// addUrlCat('1622000344187944217.jpg')
// addUrlCat('bf8e5ca0558bbeb976703517adaba04a.png')
// addUrlCat('fullsize.gif')
// addUrlCat('photo_2022-02-14_16-27-42.jpg')
// addUrlCat('photo_2022-02-18_19-49-29.jpg')
// addUrlCat('photo_2022-02-18_19-50-06.jpg')
// addUrlCat('photo_2022-02-18_19-50-20.jpg')
// addUrlCat('photo_2022-02-18_19-50-39.jpg')
// addUrlCat('photo_2022-02-18_19-51-06.jpg')
// addUrlCat('wr-960.jpg')

// findUrlCat(3).then( (res) => {
//     console.log(res)
// })

// console.log('==============', a)

export {findUrlCat, addUrlCat}
