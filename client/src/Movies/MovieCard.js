import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import UpdateMovieForm from '../Movies/UpdateMovieForm';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
            <NavLink className='update-button' exact to="/update-form">
            Update Movie
          </NavLink>
          <Route path="/update-form" component={UpdateMovieForm} />
    </div>
  );
};

export default MovieCard;
