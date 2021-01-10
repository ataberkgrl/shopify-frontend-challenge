import React, { } from 'react';
import MovieCard from "../MovieCard/MovieCard.js"
import "./Results.css"

function Results(props) {

    const scrollDeck = (scrollOffset) => {
        const deck = document.querySelector(".card-deck")
        deck.scrollLeft += scrollOffset
    }

    return (
        <div id="results">
            <button class="scroll-button" onClick={() => scrollDeck(-(window.innerWidth - 90) + ((window.innerWidth - 90) % 200) - (Math.floor(window.innerWidth / 200) * 10))}>
                <img className="scroll-left" src="/left-arrow.png" alt="left scroll arrow"></img>
            </button>
            <div className="card-deck">
                {props.results ? props.results.map((movie, index) =>
                    <MovieCard key={index} movie={movie} handleButton={props.handleNominate} nominated={false}></MovieCard>
                ) : null}
            </div>
            <button className="scroll-button" onClick={() => scrollDeck((window.innerWidth - 90) - ((window.innerWidth - 90) % 200) + (Math.floor(window.innerWidth / 200) * 10))}>
                <img className="scroll-right" src="/right-arrow.png" alt="right scroll arrow"></img>
            </button>
        </div>
    )
}

export default Results