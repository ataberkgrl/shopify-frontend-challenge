import React, { } from 'react';
import "./SearchBar.css"

function SearchBar(props) {

    return (
        <div id="search">
            <input
            type="text"
            onChange={
                (e) => {
                    props.setSearch(e.target.value)
                    props.fetchMovies(1, e.target.value)
                }
            }
            value={props.search}
            placeholder="What are your favourite movies?"></input>
        </div>
    )
}

export default SearchBar