// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStory from './InputStory';
import InputRating from './InputRating';
import InputGenre from './InputGenre';
import SendButton from './SendButton';

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

    handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
    }

    handleClick = (onClick) => {
      onClick(this.state);

      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      });
    }

    render() {
      const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
      const { onClick } = this.props;
      return (
        <section>
          <form data-testid="add-movie-form">
            <InputTitle value={ title } onChange={ this.handleChange } />
            <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
            <InputImage value={ String(imagePath) } onChange={ this.handleChange } />
            <InputStory value={ storyline } onChange={ this.handleChange } />
            <InputRating value={ Number(rating) } onChange={ this.handleChange } />
            <InputGenre value={ genre } onChange={ this.handleChange } />
          </form>
          <SendButton onChange={ () => this.handleClick(onClick) } />
        </section>
      );
    }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
