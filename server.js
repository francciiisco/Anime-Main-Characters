const express = require('express')



const app = express()



app.use(express.urlencoded({extended: true}))



app.get('/', (req, res) => {
    res.send('Hellow World')
}) 



// mongoose.connect('mongodb://localhost:27017/anime').then(() => {
//     console.log('connection with mongo is up');
// })

app.listen(3000, () => {
    console.log('listening');
})