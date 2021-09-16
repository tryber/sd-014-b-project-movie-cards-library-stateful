import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './addMovieComponetes/Subtitle';
import Title from './addMovieComponetes/Title';
import Image from './addMovieComponetes/Image';
import TextArea from './addMovieComponetes/TextArea';
import Number from './addMovieComponetes/Number';
import Select from './addMovieComponetes/Select';

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

  handleClick = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSumit = (event) => {
    event.preventDefault();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form" onSubmit={ this.handleSumit }>
          <Title value={ title } onChange={ this.handleClick } />
          <Subtitle value={ subtitle } onChange={ this.handleClick } />
          <Image value={ imagePath } onChange={ this.handleClick } />
          <TextArea value={ storyline } onChange={ this.handleClick } />
          <Number value={ rating } onChange={ this.handleClick } />
          <Select value={ genre } onChange={ this.handleClick } />
          <button
            type="submit"
            data-testid="send-button"
            onClick={ onClick }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
