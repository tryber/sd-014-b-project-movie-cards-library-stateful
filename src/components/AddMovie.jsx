// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TitleComponent from './AddMovieComponents/TitleComponent';
import SubTitleComponent from './AddMovieComponents/SubTitleComponent';
import ImageComponent from './AddMovieComponents/ImageComponent';
import StoryLineComponent from './AddMovieComponents/StoryLineComponent';
import RatingComponent from './AddMovieComponents/RatingComponent';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleText = this.handleText.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleText(event) {
    const { value, name } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form action="" data-testid="add-movie-form">
        <TitleComponent callback={ this.handleText } value={ title } />
        <SubTitleComponent callback={ this.handleText } value={ subtitle } />
        <ImageComponent callback={ this.handleText } value={ imagePath } />
        <StoryLineComponent callback={ this.handleText } value={ storyLine } />
        <RatingComponent callback={ this.handleText } value={ rating } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
