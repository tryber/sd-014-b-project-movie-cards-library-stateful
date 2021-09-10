import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="card m-2" Style="width: 18rem;" data-testid="movie-card">
        <img alt="Movie Cover" className="card-img-top" src={ imagePath } />
        <div className="card-body">
          <h4 data-testid="card-title" className="movie-card-title">{title}</h4>
          <h5 className="card-text muted">{subtitle}</h5>
          <p className="card-text">{storyline}</p>
        </div>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
