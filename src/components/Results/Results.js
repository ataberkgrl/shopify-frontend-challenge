import React, { } from 'react';
import CardDeck from "../CardDeck/CardDeck.js"
import "./Results.css"

function Results(props) {

    const scrollDeck = () => {
        const deck = document.querySelector("#results > .card-deck")
        deck.scrollLeft += calculateScrollOffset
    }

    const calculateScrollOffset = () => {
        /* Calculation to scroll next non-fully seen item. It's a bit hardcoded. 
            Getting MovieCard component's size as prop is a better approach.
            Since width of MovieCard component may be changed. */
        return (window.innerWidth - 90) - ((window.innerWidth - 90) % 200) + (Math.floor(window.innerWidth / 200) * 10)
    }

    return (
        <div id="results">
            <button className="scroll-button" onClick={() => -scrollDeck}>
                <img className="scroll-left" src="/left-arrow.png" alt="left scroll arrow"></img>
            </button>
            <CardDeck movies={props.results} handleClick={props.handleNominate} nominated={false}></CardDeck>
            <button className="scroll-button" onClick={() => scrollDeck}>
                <img className="scroll-right" src="/right-arrow.png" alt="right scroll arrow"></img>
            </button>
        </div>
    )
}

export default Results