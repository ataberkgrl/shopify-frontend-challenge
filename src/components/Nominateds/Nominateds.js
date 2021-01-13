import React, { } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import "./Nominateds.css"

function Nominateds(props) {
    return (
        <div className="card-deck" id="nominateds">
            {props.nominateds ? props.nominateds.map((movie, index) => 
                <MovieCard key={index} movie={movie} handleClick={props.handleRemove} nominated={true}></MovieCard>
            ) : null}
        </div>
    )
}

export default Nominateds