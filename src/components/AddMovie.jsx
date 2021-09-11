import React from 'react';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handleChange = (event) => {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
    });
  };

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <p>Olá!</p>
        </form>
        <label
          htmlFor="title"
          data-testid="title-input-label"
        >
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label
          htmlFor="subtitle"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <div>
          { imagePath }
          { storyline }
          { rating }
          { genre }
        </div>
      </section>

    );
  }
}

export default AddMovie;
