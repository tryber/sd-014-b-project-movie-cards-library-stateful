// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            id="text-input"
            type="text"
            value={ this.state.title }
          />
        </label>
        <label htmlFor="title-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="title-input"
            id="text-input"
            type="text"
            value={ this.state.subtitle }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
