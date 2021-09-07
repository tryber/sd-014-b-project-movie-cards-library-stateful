import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieForm from './addMovieComponents/AddMovieForm';

// Atributos "Role" e "tabIndex", após pesquisa em documentação:
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#accessibility_concerns

class AddMovie extends Component {
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

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyUp({ target: { name, value }, keyCode }) {
    const keyEnter = 13;
    if (keyCode === keyEnter) {
      this.setState({
        [name]: value,
      });
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <AddMovieForm
          titleState={ title }
          subtitleState={ subtitle }
          imgPathState={ imagePath }
          ratingState={ rating }
          onChange={ this.handleChange }
        >
          { storyline }
          { genre }
        </AddMovieForm>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
