import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function MovieList(props) {

  const { url } = useRouteMatch();
  console.log('url console log', url);

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link key={movie.id} to={`${url}movies/${movie.id}`}> 
        <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
       
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      
    </div>
  );
}
