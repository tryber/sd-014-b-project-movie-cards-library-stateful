import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.component {
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
  }

  onSearchTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { onClick, title, subtitle } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Titulo
          <input
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          <input
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.PropTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
