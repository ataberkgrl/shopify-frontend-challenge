import React, { useEffect, useState } from 'react';
import MovieInfo from './MovieInfo';

function Results(props) {
    return (
        <div>
            {props.results ? props.results.map(movie =>
                <div>
                    <MovieInfo movie={movie}></MovieInfo>
                    <button onClick={() => props.handleNominate(movie)}>Nominate</button>
                </div>
            ) : null}
        </div>
    )
}

export default Results