import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.setState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <form />
    );
  }
}

export default AddMovie;
