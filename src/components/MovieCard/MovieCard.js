import { useState } from "react"
import ImageLoader from "../ImageLoading/ImageLoading.js"
import "./MovieCard.css" 

function MovieCard(props) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className="card result">
            <button className="card-button" onClick={() => props.handleButton(props.movie)}>
                <img className="card-hover-icon" src={!props.nominated ? "/nominate.png" : "/unnominate.png"} alt="nominate icon"></img>
                {!loaded && <ImageLoader/>}
                <img 
                    className="card-img-top" 
                    src={props.movie.Poster !== "N/A" ? props.movie.Poster : "/no-image.png"} 
                    alt={`Poster of ${props.movie.Title}`} 
                    onLoad={() => setLoaded(true)}>
                </img>
                <div className="card-body">
                    <h3 className="card-title">{props.movie.Title}</h3>
                    <p className="card-text">{props.movie.Year}</p>
                </div>
            </button>
        </div>
    )
}

export default MovieCard