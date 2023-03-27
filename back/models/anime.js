const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String
})

const Anime = mongoose.model('Anime', animeSchema)

module.exports = Anime