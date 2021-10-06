import React from 'react';

import Title from './inputs/Title';
import Subtitle from './inputs/Subtitle';
import ImagePath from './inputs/ImagePath';
import Storyline from './inputs/StoryLine';
import RatingInput from './inputs/RatingInput';
import Genre from './inputs/Genre';

class AddMovie extends React.Component {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } />
        <Subtitle subtitle={ subtitle } />
        <ImagePath imagePath={ imagePath } />
        <Storyline storyline={ storyline } />
        <RatingInput rating={ rating } />
        <Genre genre={ genre } />
      </form>
    );
  }
}

export default AddMovie;
