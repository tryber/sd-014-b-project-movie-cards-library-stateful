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
        </form>
      </section>
    );
  }
}

export default AddMovie;
