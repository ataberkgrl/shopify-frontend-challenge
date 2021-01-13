import React, { } from 'react';
import CardDeck from "../CardDeck/CardDeck.js"
import "./Results.css"

function Results(props) {

    return (
        <div id="results">
            <CardDeck movies={props.results} handleMovieClick={props.handleMovieClick} nominateds={props.nominateds}></CardDeck>
        </div>
    )
}

export default Results