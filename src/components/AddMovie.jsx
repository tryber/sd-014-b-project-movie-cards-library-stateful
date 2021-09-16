// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import ImagePath from './subcomponents/ImagePath';
import Title from './subcomponents/Title';
import Genre from './subcomponents/Genre';
import Subtitle from './subcomponents/Subtitle';
import Sinopse from './subcomponents/Sinopse';
import Avaliacao from './subcomponents/Avaliacao';

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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
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
      <div>
        <form data-testid="add-movie-form" action="">
          <Title title={ title } onChange={ this.handleInputChange } />
          <Subtitle subtitle={ subtitle } onChange={ this.handleInputChange } />
          <ImagePath imagePath={ imagePath } onChange={ this.handleInputChange } />
          <Sinopse storyline={ storyline } onChange={ this.handleInputChange } />
          <Avaliacao rating={ rating } onChange={ this.handleInputChange } />
          <Genre genre={ genre } onChange={ this.handleInputChange } />
          <button
            type="button"
            data-testid="send-button"
            onClick={ () => {
              onClick(this.state);
              this.setState({
                subtitle: '',
                title: '',
                imagePath: '',
                storyline: '',
                rating: 0,
                genre: 'action',
              });
            } }
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
