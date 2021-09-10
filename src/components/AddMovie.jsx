import React, { Component } from 'react';

export default class AddMovie extends Component {
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
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          <p>Título</p>
          <input
            type="text"
            data-testid="title-input"
            id="input-text"
            name="title"
            value={ title }
            onChange={ this.changeInput }
          />
        </label>
        <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
          <p>Subtítulo</p>
          <input
            type="text"
            data-testid="subtitle-input"
            id="input-subtitle"
            name="subtitle"
            value={ subtitle }
            onChange={ this.changeInput }
          />
        </label>
      </form>
    );
  }
}