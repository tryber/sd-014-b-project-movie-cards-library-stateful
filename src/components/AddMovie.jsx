// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
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

    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(event) {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
    });
  }

  render() {
    const { state } = this;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              value={ state.title }
              onChange={ this.addMovie }
              data-testid="title-input"
              id="title-input"
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ state.subtitle }
              onChange={ this.addMovie }
              data-testid="subtitle-input"
              id="subtitle-input"
            />
          </label>
        </form>
      </section>
    );
  }
}

export default AddMovie;
