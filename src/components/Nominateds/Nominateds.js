import React, { } from 'react';
import MovieCard from '../MovieCard/MovieCard';

function Nominateds(props) {
    return (
        <div className="card-deck">
            {props.nominateds ? props.nominateds.map(movie => 
                <MovieCard movie={movie} handleButton={props.handleRemove} nominated={true}></MovieCard>
            ) : null}
        </div>
    )
}

export default Nominateds