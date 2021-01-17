import React, { } from 'react';
import CardDeck from "../CardDeck/CardDeck.js"
import "./Results.css"

function Results(props) {

    return (
        <div id="results">
            <CardDeck 
            search={props.search}
            movies={props.results}
            fetchMovies={props.fetchMovies}
            nominatedDeck={false}
            handleMovieClick={props.handleMovieClick}
            nominationCheck={props.nominationCheck}></CardDeck>
        </div>
    )
}

export default Results