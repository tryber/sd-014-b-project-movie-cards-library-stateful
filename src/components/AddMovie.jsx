import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './AddMovieComponents/Subtitle';
import Title from './AddMovieComponents/Title';
import Image from './AddMovieComponents/Image';
import TextArea from './AddMovieComponents/TextArea';
import Number from './AddMovieComponents/Number';
import Select from './AddMovieComponents/Select';

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

  handleButton = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  handleSumit = (event) => {
    event.preventDefault();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

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
            onClick={ this.handleButton }
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

// Referência: https://pt-br.reactjs.org/docs/hooks-state.html
