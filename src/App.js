import SearchBar from './components/SearchBar/SearchBar.js';
import Results from './components/Results/Results.js';
import Welcome from './components/Welcome/Welcome.js';
import "./App.css"
import React, { useState } from 'react';
import Nominateds from './components/Nominateds/Nominateds.js';

function App() {
    const apikey = "109a2cb4"
    const [results, setResults] = useState([])
    const [nominateds, setNominateds] = useState(localStorage.getItem("nominateds") !== null 
                                                    ? JSON.parse(localStorage.getItem("nominateds")) : [])

    const handleSearch = (search) => {
        fetch(`https://www.omdbapi.com/?s=${search}&apikey=${apikey}&type=movie`)
        .then(response => response.json())
        .then(data => {setResults(data.Search)})
    }

    const handleMovieClick = (movie) => {
        if (!nominationCheck(movie) & nominateds.length < 5)
        {
            setNominateds([...nominateds, movie])
            localStorage.setItem("nominateds", JSON.stringify([...nominateds, movie]))
        }
        else
        {
            nominateds.forEach((nominated, index) => {
                if (JSON.stringify(movie) === JSON.stringify(nominated))
                {
                    const copyNominateds = [...nominateds]
                    copyNominateds.splice(index, 1)
                    setNominateds(copyNominateds)
                    localStorage.setItem("nominateds", JSON.stringify(copyNominateds))
                }
            })
        }
    }

    const nominationCheck = (movie) => {
        return nominateds.some(nominated => {
            return JSON.stringify(movie) === JSON.stringify(nominated)
        })
    }

    return (
        <div className="App">
            {nominateds.length ? <Nominateds nominateds={nominateds} handleMovieClick={handleMovieClick}/> : <Welcome/>}
            <SearchBar apikey={apikey} onChange={handleSearch}/>
            {(results !== undefined && results.length) ? 
            <Results results={results} nominationCheck={nominationCheck} handleMovieClick={handleMovieClick}/>
            : null}
        </div>
    );
}

export default App;
