import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.add = this.add.bind(this);

    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyLine: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  add(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    // const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.add }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
//   subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
//   imagePath: PropTypes.string.isRequired,
//   storyLine: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   genre: PropTypes.string.isRequired,
};

export default AddMovie;
