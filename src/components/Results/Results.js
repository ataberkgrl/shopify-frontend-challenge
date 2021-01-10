import React, { } from 'react';
import MovieCard from "../MovieCard/MovieCard.js"
import "./Results.css"

function Results(props) {
    return (
        <div className="card-deck" id="results">
            {props.results ? props.results.map((movie, index) =>
                <MovieCard key={index} movie={movie} handleButton={props.handleNominate} nominated={false}></MovieCard>
            ) : null}
        </div>
    )
}

export default Results