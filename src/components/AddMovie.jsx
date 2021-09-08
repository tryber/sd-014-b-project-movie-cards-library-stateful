import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: ''
    };
  }

  onClick(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="tituloNovo" data-testid="title-input-label">
          Título
          <input
            id="tituloNovo"
            type="text"
            data-testid="title-input"
            value={ this.state.title }
            onChange={ this.onClick }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
