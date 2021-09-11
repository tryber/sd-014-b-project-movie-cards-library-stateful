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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <p>Olá!</p>
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
