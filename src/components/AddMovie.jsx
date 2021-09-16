import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

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

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    }
    // Consultei o repositório do Fabrício Cardoso para resolver o requisito 14
    // Link: https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/116

    resetState = (callback) => {
      callback(this.state);
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
      const { onClick } = this.props;
      const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
      return (
        <form action="" data-testid="add-movie-form">
          <InputTitle
            value={ title }
            handleChange={ this.handleChange }
          />

          <InputSubtitle
            value={ subtitle }
            handleChange={ this.handleChange }
          />

          <InputImage
            value={ imagePath }
            handleChange={ this.handleChange }
          />

          <InputStoryline
            value={ storyline }
            handleChange={ this.handleChange }
          />

          <InputRating
            value={ Number(rating) }
            handleChange={ this.handleChange }
          />

          <InputGenre
            value={ genre }
            handleChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="send-button"
            onClick={ () => this.resetState(onClick) }
          >
            Adicionar filme
          </button>
        </form>
      );
    }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
