const Anime = (props) => {
    return(
        <>
        <div>
            <img src={props.anime.image}></img>
            <h3>Name: {props.anime.name}</h3>
            <p>From: {props.anime.title}</p>
        </div>
        </>
    )
}

export default Anime