// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { addMovie } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="subtitle" data-testid="title-input-label">
          Título
          <input
            id="title"
            name="title"
            value={ title }
            type="text"
            data-testid="title-input"
            onChange={ this.handleInputChange }
          />
        </label>
        <button type="submit" onClick={ addMovie }>Adicionar</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default AddMovie;
