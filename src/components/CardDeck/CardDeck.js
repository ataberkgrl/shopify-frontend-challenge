import React, { useState, useRef } from 'react';
import MovieCard from "../MovieCard/MovieCard.js"
import ScrollContainer from "react-indiana-drag-scroll"
import "./CardDeck.css"

function CardDeck(props) {
    const scrollContainerRef = useRef()
    const [currentPage, setCurrentPage] = useState(1)

    const scrollEndHandler = () => {
        if (currentPage === 5) // don't fetch more than 5 pages
            return null
        props.fetchMovies(currentPage + 1)
        setCurrentPage(currentPage + 1)
    }

    const checkEnd = () => { // check if the user is close to the end of the current fetched results, if so fetch next page.
        const triggerScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth + 200;
        if (scrollContainerRef.current.scrollLeft < triggerScrollLeft) {
            scrollEndHandler()
        }
    }
    
    return (
        <div className="card-deck">
            <ScrollContainer onEndScroll={!props.nominatedDeck ? () => checkEnd() : null} innerRef={scrollContainerRef} className="movies">
                {props.movies ? props.movies.map((movie, index) =>
                    <MovieCard key={index} movie={movie} handleClick={props.handleMovieClick} nominated={props.nominatedDeck || props.nominationCheck(movie)}></MovieCard>
                ) : null}
            </ScrollContainer>
        </div>
    )
}

export default CardDeck