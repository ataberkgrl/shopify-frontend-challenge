import React, { } from 'react';
import MovieCard from "../MovieCard/MovieCard.js"

function Results(props) {
    return (
        <div className="card-deck">
            {props.results ? props.results.map(movie =>
                <MovieCard movie={movie} handleButton={props.handleNominate}></MovieCard>
            ) : null}
        </div>
    )
}

export default Results