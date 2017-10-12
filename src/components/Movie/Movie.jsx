import React from "react";
import "./Movie.scss";
function Movie( {match,data} ) {
    console.log(match,data )
    const movie = data.find(movie => movie.show_title === match.params.name)
    console.log(movie)
    
    return (
        <div>
            <div key={movie.show_id} className='movie-item'>
                <div className="movie-item-image">
                    <img src={movie.poster} alt=""/>
                </div>
                <div className="movie-item-info">
                    <div>
                        <span className="movie-item-title">{movie.show_title}</span>
                        <span className="movie-item-rating">{movie.rating}</span>
                    </div>
                    <p className='movie-item-awards'></p>
                    <div>
                        <span className="movie-item-realese">{movie.release_year}</span>
                        <span className="movie-item-realese">{movie.runtime}</span>
                    </div>
                    <p className="movie-item-summary">
                        {movie.summary}
                    </p>
                    <p className='movie-item-summary'>
                        <span>Director:</span>
                        <span className="movie-item-director">{movie.director}</span>
                    </p>
                    <p className='movie-item-summary'>
                        <span>Cast:</span>
                        <span className="movie-item-cast">{movie.show_cast}</span>
                    </p>
                </div>
            </div>
        </div>
       );
}

export default Movie