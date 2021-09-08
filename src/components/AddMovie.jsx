// implement AddMovie component here
import React from 'react';
import PropType from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: 'action'
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        1
      </form>
    );
  }
}

AddMovie.PropType = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
