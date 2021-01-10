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
        fetch(`http://www.omdbapi.com/?s=${search}&apikey=${apikey}`)
        .then(response => response.json())
        .then(data => {setResults(data.Search)})
    }

    const handleNominate = (movie) => {
        if (!nominateds.includes(movie) & nominateds.length < 5)
        setNominateds([...nominateds, movie])
        localStorage.setItem("nominateds", JSON.stringify([...nominateds, movie]))
    }

    const handleRemove = (movie) => {
        const copyNominateds = [...nominateds]
        const index = nominateds.indexOf(movie)
        copyNominateds.splice(index, 1)
        setNominateds(copyNominateds)
        localStorage.setItem("nominateds", JSON.stringify(copyNominateds))
    }

    return (
        <div className="App">
            {nominateds.length ? <Nominateds nominateds={nominateds} handleRemove={handleRemove}></Nominateds> : <Welcome></Welcome>}
            <SearchBar apikey={apikey} onChange={handleSearch}></SearchBar>
            <Results results={results} handleNominate={handleNominate}></Results>
        </div>
    );
}

export default App;
