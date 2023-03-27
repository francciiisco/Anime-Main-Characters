const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Anime = require('./models')

app.use(express.json());
app.use(cors());


app.post('/anime', (req,res) =>{
    Anime.create(req.body)
    .then((createdAnime) =>{
        res.json(createdAnime)
    })
});

app.get('/anime', (req, res) =>{
    Anime.find({})
    .then((foundAnime) =>{
        res.json(foundAnime)
    })
});

app.delete('/anime/:id', (req, res) =>{
    Anime.findByIdAndRemove(req.params.id)
    .then((deletedAnime) =>{
        res.json(deletedAnime)
    })
});


app.put('/anime/:id', (req, res) =>{
    Anime.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedAnime) => res.json(updatedAnime))
})




app.listen(3000, ()=>{
    console.log('listening...');
});

mongoose.connect('mongodb://localhost:27017/anime')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});