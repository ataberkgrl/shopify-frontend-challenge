function MovieInfo(props) {
    return (
        <div>
            <h3>{props.movie.Title} - {props.movie.Year}</h3>
        </div>
    )
}

export default MovieInfo