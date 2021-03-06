import React, { } from 'react';
import CardDeck from '../CardDeck/CardDeck.js';
import "./Nominateds.css"

function Nominateds(props) {
    return (
        <div id="nominateds">
            <h3 id="nominations-text">Your Nominations</h3>
            <CardDeck movies={props.nominateds} nominatedDeck={true} handleMovieClick={props.handleMovieClick}></CardDeck>
        </div>
    )
}

export default Nominateds