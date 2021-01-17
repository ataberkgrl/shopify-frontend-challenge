import { useState } from "react"
import ImageLoader from "../ImageLoading/ImageLoading.js"
import "./MovieCard.css" 

function MovieCard(props) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className={`card ${props.nominated ? "nominated" : ""}`}>
            <button className="card-button" onClick={() => props.handleClick(props.movie)}>
                <div className="img-container">
                    {props.nominated ? <img className="nominated-icon" src="/nominate.png" alt="nominate icon"></img> : null}
                    <img className="card-hover-icon" src={!props.nominated ? "/nominate.png" : "/unnominate.png"} alt="nominate icon"></img>
                    {!loaded && <ImageLoader/>}
                    <img 
                        className="card-img"
                        src={props.movie.Poster !== "N/A" ? props.movie.Poster : "/no-image.png"} 
                        alt={`Poster of ${props.movie.Title}`} 
                        onLoad={() => setLoaded(true)}>  
                    </img>
                </div>
                <div className="card-body">
                    <h3 className="card-title">{props.movie.Title}</h3>
                    <p className="card-text">{props.movie.Year}</p>
                </div>
            </button>
        </div>
    )
}

export default MovieCard