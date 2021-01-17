import SearchBar from './components/SearchBar/SearchBar.js';
import Results from './components/Results/Results.js';
import Welcome from './components/Welcome/Welcome.js';
import NominationDone from './components/NominationDone/NominationDone.js'
import "./App.css"
import React, { useState } from 'react';
import Nominateds from './components/Nominateds/Nominateds.js';

function App() {
    const [search, setSearch] = useState("")
    const apikey = "109a2cb4"
    const [results, setResults] = useState([])
    const [nominateds, setNominateds] = useState(localStorage.getItem("nominateds") !== null ? JSON.parse(localStorage.getItem("nominateds")) : [])

    const fetchMovies = (page=1, searchedMovie=search) => {
        fetch(`https://www.omdbapi.com/?s=${searchedMovie}&apikey=${apikey}&type=movie&page=${page}`)
        .then(response => response.json())
        .then(data => {
            if (page === 1) // if it is an initial search
            {
                setResults(data.Search)
            }
            else if (data.Search !== undefined) // if it is fetching next page
            {
                setResults((prevState) => prevState.concat(data.Search))
            }
        })
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
            <SearchBar fetchMovies={fetchMovies} setSearch={setSearch}/>
            {nominateds.length === 5 ? <NominationDone/> : (results !== undefined && results.length) ? <Results
                                                                                                        search={search}
                                                                                                        fetchMovies={fetchMovies}
                                                                                                        results={results}
                                                                                                        nominationCheck={nominationCheck}
                                                                                                        handleMovieClick={handleMovieClick}/>
                                                                                                        : null}
        </div>
    );
}

export default App;
