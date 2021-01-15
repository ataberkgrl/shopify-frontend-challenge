import React, { } from 'react';
import MovieCard from "../MovieCard/MovieCard.js"
import ScrollContainer from "react-indiana-drag-scroll"
import "./CardDeck.css"

function CardDeck(props) {

    return (
        <div className="card-deck">
            <ScrollContainer className="movies">
                {props.movies ? props.movies.map((movie, index) =>
                    <MovieCard key={index} movie={movie} handleClick={props.handleMovieClick} nominated={props.nominatedDeck || props.nominationCheck(movie)}></MovieCard>
                ) : null}
            </ScrollContainer>
        </div>
    )
}

export default CardDeck