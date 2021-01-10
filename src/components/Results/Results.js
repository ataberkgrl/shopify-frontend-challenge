import React, { } from 'react';
import MovieCard from "../MovieCard/MovieCard.js"
import "./Results.css"

function Results(props) {
    return (
        <div className="card-deck" id="results">
            {props.results ? props.results.map(movie =>
                <MovieCard movie={movie} handleButton={props.handleNominate}></MovieCard>
            ) : null}
        </div>
    )
}

export default Results