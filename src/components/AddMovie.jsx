// implement AddMovie component here
import React, { Component } from 'react';
import ImagePath from './ImagePath';
import Rating from './Rating';
import Storyline from './Storyline';
import Subtitle from './Subtitle';
import Title from './Title';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title
          title={ title }
          onChange={
            ({ target: { value } }) => { this.setState({ title: value }); }
          }
        />
        <Subtitle
          subtitle={ subtitle }
          onChange={
            ({ target: { value } }) => { this.setState({ subtitle: value }); }
          }
        />
        <ImagePath
          imagePath={ imagePath }
          onChange={
            ({ target: { value } }) => { this.setState({ imagePath: value }); }
          }
        />
        <Storyline
          storyline={ storyline }
          onChange={
            ({ target: { value } }) => { this.setState({ storyline: value }); }
          }
        />
        <Rating
          rating={ rating }
          onChange={
            ({ target: { value } }) => { this.setState({ rating: Number(value) }); }
          }
        />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onclick: PropTypes.func.isRequired,
// };

export default AddMovie;
