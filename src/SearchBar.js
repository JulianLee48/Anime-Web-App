import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';


export default function SearchBar() {

    const [animeName, setAnimeName] = React.useState("");
    const [animeCard, setAnimeCard] = React.useState({});
 


    function handleSubmit(event) {
        event.preventDefault();
        if (animeName) {
            fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`)
                .then(res => res.json())
                .then(data => setAnimeCard(data.data))
                .catch(error => console.log(error));
        }
    }

    const Cards =
    animeCard.length > 0 ? (
      <div className="anime-list">
        {animeCard.map(anime => (
          <Card key={anime.mal_id} anime={anime} />
        ))}
      </div>
    ) : (
      <p></p>
    );

    return (
        <div >
            <h1 className="Search">
                <input
                    value={animeName}
                    onChange={(e) => setAnimeName(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </h1> 
            <body className="Layout">
                {Cards}
                </body>     
        </div>

    )

}

