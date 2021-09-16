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
