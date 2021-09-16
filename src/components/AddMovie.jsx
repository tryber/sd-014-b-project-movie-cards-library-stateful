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
  }

  handleChange =(event) => {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="Título" data-testid="title-input-label">
            Título
            <input
              data-testid="title-input"
              type="text"
              onChange={ this.handleChange }
              value={ title }
            />
          </label>
        </form>
        <div>
          { subtitle }
          { title }
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
