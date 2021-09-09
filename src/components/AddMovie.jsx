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
  }

  render() {
    const { subtitle, title, imagePath,
      storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" />
      </div>
    );
  }
}
