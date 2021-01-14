import React, { useRef } from 'react';
import MovieCard from "../MovieCard/MovieCard.js"
import "./CardDeck.css"

function CardDeck(props) {

    const cardWidth = ((50 + 10/100 * window.innerWidth) + 10)
    const moviesRef = useRef(null)

    const scrollDeck = (direction) => {
        if (direction === "R")
            moviesRef.current.scrollLeft += calculateScrollOffset()
        else
            moviesRef.current.scrollLeft -= calculateScrollOffset()
    }

    const scrollButtonNeed = () => {
        if (cardWidth * props.movies.length > window.innerWidth)
            return true
        return false
    }

    const calculateScrollOffset = () => {
        /* Calculation to scroll next non-fully seen movie. It's a bit hardcoded. 
            Getting MovieCard component's width as prop is a better approach
            since width of MovieCard component may be changed. */
        return (window.innerWidth - 90) - ((window.innerWidth - 90) % cardWidth)
    }

    return (
        <div className="card-deck">
            {scrollButtonNeed() ?
                <button className="scroll-button" onClick={() => scrollDeck("L")}>
                    <img className="scroll-left" src="/left-arrow.png" alt="left scroll arrow"></img>
                </button>
            : null}
            <div class="movies" ref={moviesRef}>
                {props.movies ? props.movies.map((movie, index) =>
                    <MovieCard key={index} movie={movie} handleClick={props.handleMovieClick} nominated={props.nominatedDeck || props.nominationCheck(movie)}></MovieCard>
                ) : null}
            </div>
            {scrollButtonNeed() ? 
                <button className="scroll-button" onClick={() => scrollDeck("R")}>
                    <img className="scroll-right" src="/right-arrow.png" alt="right scroll arrow"></img>
                </button>
            : null}
        </div>
    )
}

export default CardDeck