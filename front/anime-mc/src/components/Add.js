import {useState} from 'react'

const Add = (props) => {
    const [anime, setAnime] = useState({name: '', image: '', title: ''})

    const handleChange = (event) => {
        setAnime({...anime, [event.target.name] : event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(anime)
    }

    return(
        <>
        <div>
            <h3>Register New Anime</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' onChange={handleChange}></input>
                <br/>
                <br/>
                <label htmlFor='name'>Image: </label>
                <input type='url' name='image' onChange={handleChange}></input>
                <br/>
                <br/>
                <label htmlFor='name'>Title: </label>
                <input type='text' name='title' onChange={handleChange}></input>
                <br/>
                <br/>
                <input className='btn' type='submit'></input>
            </form>
        </div>
        </>
    )
}

export default Add