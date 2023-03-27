import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Anime from './components/Anime'
import New from './components/Add'
import Edit from './components/Edit'



const App = () => {
  const [anime, setAnime] = useState([])

  
  
  
  const getAnime = () => {
    axios.get('http://localhost:3000/anime')
    .then((response) => setAnime(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/anime', data)
    .then((response) => {
       console.log(response)
       let newAnime = [...anime, response.data]
       setAnime(newAnime)
    })
 }


 const handleDelete = (deletedAnimemc) => {
  axios.delete('http://localhost:3000/anime/' + deletedAnimemc._id)
  .then((response) => {
   let newAnime = anime.filter((animemc) => {
      return animemc._id !== deletedAnimemc._id
   })
     
   setAnime(newAnime)
  })
}
  
  const handleEdit = (data) => {
    axios.put('http://localhost:3000/anime/' + data._id, data)
    .then((response) => {
      console.log(response);
      let newAnime = anime.map((animemc) => {
        return animemc._id !== data._id ? animemc : data
      })
      setAnime(newAnime)
    })
  }
  
  
  useEffect(() => {
    getAnime()
  }, [])  
  
  return (
  <>
    <h1>Anime Main Characters</h1>
    <New handleCreate={handleCreate}/>
    {anime.map((anime) => {
   return (
    <>
      <Anime anime={anime}/>
      <Edit anime={anime} handleEdit={handleEdit} />
      <button onClick={ () =>{handleDelete(anime)}}>Delete Character</button>
    </>
   )
})}

  </>
  )
}

export default App