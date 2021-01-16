import React, { useState } from 'react';
import "./SearchBar.css"

function SearchBar(props) {
    const [search, setSearch] = useState("")

    return (
        <div id="search">
            <input
            type="text"
            onChange={
                (e) => {
                    setSearch(e.target.value)
                    props.onChange(e.target.value)
                }
            }
            value={search}
            placeholder="What is your favourite movie?"></input>
        </div>
    )
}

export default SearchBar