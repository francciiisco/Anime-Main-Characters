import {useState} from 'react'

const Edit = (props) => {
    const [animemc, setAnimemc] = useState({...props.anime})

    const handleChange = (event) => {
        setAnimemc({...animemc, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(animemc)
    }

    return(
        <>
        <details>
          <summary>Edit Character Info</summary>
          <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' onChange={handleChange} value={animemc.name}/>
          <br/>
          <br/>
          <label htmlFor='title'>From:</label>
          <input type='text' name='species' onChange={handleChange} value={animemc.title}/>
          <br/>
          <br/>  
          <label htmlFor='image'>Image: </label> 
          <input type="text" name='image' onChange={handleChange} value={animemc.image}/> 
          <br/>
          <br/>
          <input type="submit"/>
          </form>
        </details>
      </>
    )
}

export default Edit