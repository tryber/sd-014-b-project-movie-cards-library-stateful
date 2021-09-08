import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.movieInformation = this.movieInformation.bind(this);
  }

  movieInformation = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="subtitle">
          subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            onChange={ this.movieInformation }
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default AddMovie;
