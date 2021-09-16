import React from 'react';
import PropTypes from 'prop-types';
import InputTexts from './InputTexts';
import InputRating from './InputRating';
import InputSelect from './InputSelect';
import TextArea from './TextArea';

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
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTexts
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          onChange={ onClick }
        />
        <TextArea
          storyline={ storyline }
          onChange={ onClick }
        />
        <InputRating
          rating={ rating }
          onChange={ onClick }
        />
        <InputSelect
          genre={ genre }
          onChange={ onClick }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
