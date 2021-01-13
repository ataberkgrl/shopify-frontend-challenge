import React, { } from 'react';
import MovieCard from "../MovieCard/MovieCard.js"
import "./CardDeck.css"

function CardDeck(props) {

    return (
        <div className="card-deck">
            {props.movies ? props.movies.map((movie, index) =>
                <MovieCard key={index} movie={movie} handleClick={props.handleClick} nominated={false}></MovieCard>
            ) : null}
        </div>
    )
}

export default CardDeck