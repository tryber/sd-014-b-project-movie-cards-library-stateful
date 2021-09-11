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
      <div>
        { subtitle }
        { title }
        { imagePath }
        { storyline }
        { rating }
        { genre }
      </div>
    );
  }
}

export default AddMovie;
