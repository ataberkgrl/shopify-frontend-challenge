import { useState } from "react"
import ImageLoader from "../ImageLoading/ImageLoading.js"
import "./MovieCard.css" 

function MovieCard(props) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className="card">
            {!loaded && <ImageLoader/>}
            <img 
                className="card-img-top" 
                src={props.movie.Poster !== "N/A" ? props.movie.Poster : "/no-image.png"} 
                alt={`Poster of ${props.movie.Title}`} 
                onLoad={() => setLoaded(true)}>
            </img>
            <div class="card-body">
                <h3 className="card-title">{props.movie.Title}</h3>
                <p className="card-text">{props.movie.Year}</p>
            </div>
            <button className="btn btn-primary" onClick={() => props.handleButton(props.movie)}>
                {props.nominated ? "Remove" : "Nominate"}
            </button>
        </div>
    )
}

export default MovieCard