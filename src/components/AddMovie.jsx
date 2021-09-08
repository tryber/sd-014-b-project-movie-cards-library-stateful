import React, { Component } from 'react';

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

    this.handleStartValue = this.handleStartValue.bind(this);
  }

  handleStartValue({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="movieTitle" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            name="title"
            id="movieTitle"
            type="text"
            value={ title }
            onChange={ this.handleStartValue }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
