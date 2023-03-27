import {useState} from 'react'

const Edit = (props) => {
    const [anime, setAnime] = useState({...props.anime})

    const handleChange = (event) => {
        setAnime({...anime, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(anime)
    }

    return(
        <>
        <details>

            <summary>Edit</summary>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={handleChange} value={anime.name}></input>
                <br/>
                <br/>
                <label htmlFor='name'>Image:</label>
                <input type='url' name='image' onChange={handleChange} value={anime.image}></input>
                <br/>
                <br/>
                <label htmlFor='name'>Title:</label>
                <input type='text' name='title' onChange={handleChange} value={anime.title}></input>
                <input className='btn' type='submit'></input>
            </form>
        </details>
        </>
    )
}

export default Edit