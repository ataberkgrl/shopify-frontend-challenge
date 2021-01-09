import React, { useEffect, useState } from 'react';
import MovieInfo from './MovieInfo';

function Nominateds(props) {
    return (
        <div>
            {props.nominateds ? props.nominateds.map(movie =>
                <div>
                    <MovieInfo movie={movie}></MovieInfo>
                    <button onClick={() => props.handleRemove(movie)}>Remove</button>
                </div>
            ) : null}
        </div>
    )
}

export default Nominateds