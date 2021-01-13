import React, { } from 'react';
import CardDeck from '../CardDeck/CardDeck.js';
import "./Nominateds.css"

function Nominateds(props) {
    return (
        <div id="nominateds">
            <CardDeck movies={props.nominateds} handleMovieClick={props.handleMovieClick} nominateds={props.nominateds}></CardDeck>
        </div>
    )
}

export default Nominateds