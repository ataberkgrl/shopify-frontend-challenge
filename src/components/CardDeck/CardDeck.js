import React, { useRef } from 'react';
import MovieCard from "../MovieCard/MovieCard.js"
import "./CardDeck.css"

function CardDeck(props) {
    
    const moviesRef = useRef(null)
    const scrollDeck = (direction) => {
        if (direction === "R")
            moviesRef.current.scrollLeft += calculateScrollOffset()
        else
            moviesRef.current.scrollLeft -= calculateScrollOffset()
    }   

    const calculateScrollOffset = () => {
        /* Calculation to scroll next non-fully seen movie. It's a bit hardcoded. 
            Getting MovieCard component's size as prop is a better approach.
            Since width of MovieCard component may be changed. */
        return (window.innerWidth - 90) - ((window.innerWidth - 90) % 140)
    }

    const nominationCheck = (movie) => {
        return props.nominateds.some(nominated => {
            return JSON.stringify(movie) === JSON.stringify(nominated)
        })
    }

    return (
        <div className="card-deck">
            <button className="scroll-button" onClick={() => scrollDeck("L")}>
                <img className="scroll-left" src="/left-arrow.png" alt="left scroll arrow"></img>
            </button>
            <div class="movies" ref={moviesRef}>
                {props.movies ? props.movies.map((movie, index) =>
                    <MovieCard key={index} movie={movie} handleClick={props.handleMovieClick} nominated={nominationCheck(movie)}></MovieCard>
                ) : null}
            </div>
            <button className="scroll-button" onClick={() => scrollDeck("R")}>
                <img className="scroll-right" src="/right-arrow.png" alt="right scroll arrow"></img>
            </button>
        </div>
    )
}

export default CardDeck