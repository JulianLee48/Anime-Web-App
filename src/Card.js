import React from 'react';

export default function AnimeCard({anime}) {

    function handleClick() {
        window.location.href = anime.url;
    }

    return (
        <div className="anime-card" onClick={handleClick}>

            <h2 className="card-title">{anime.title_english}</h2>

            <p className="card-score">Rating: {anime.score}/10</p>

            <p className="card-episodes">Episodes: {anime.episodes}</p>
            
            <img
                className="card-image"
                src={anime.images.jpg.image_url}
                alt={anime.title}
            />

            <p className="card-synopsis">{anime.synopsis}</p>

        </div>
    );

}