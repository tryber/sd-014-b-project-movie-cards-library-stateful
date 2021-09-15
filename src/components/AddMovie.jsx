import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  changeState = (event) => {
    this.setState({ title: event.target.value });
  }

  render() {
    const {
      title,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            value={ title }
            type="text"
            id="title-input"
            data-testid="title-input"
            onChange={ this.changeState }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

//    const { onClick } = this.props;

/*   const {
  subtitle,
  title,
  imagePath,
  storyline,
  rating,
  genre,
} = this.state; */

/* this.state = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
}; */

export default AddMovie;
