import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        { onClick + subtitle + imagePath + storyline + rating + genre }
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            id="title-input"
            name="title"
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.callback,
}.isRequired;

export default AddMovie;
