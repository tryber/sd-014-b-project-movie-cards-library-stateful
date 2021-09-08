// implement AddMovie component here
import React from 'react';
import GenreInput from '../Forms/GenreInput';
import ImagePath from '../Forms/ImagePath';
import Storyline from '../Forms/Storyline';
import Subtitle from '../Forms/Subtitle';
import Title from '../Forms/Title';
import Rating from '../Forms/Rating';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    console.log('Clicou');
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <>
        <form data-testid="add-movie-form">
          <Title value={ title } handleChange={ this.handleChange } />
          <Subtitle value={ subtitle } handleChange={ this.handleChange } />
          <ImagePath value={ imagePath } handleChange={ this.handleChange } />
          <Storyline value={ storyline } handleChange={ this.handleChange } />
          <Rating value={ rating } handleChange={ this.handleChange } />
          <GenreInput value={ genre } handleChange={ this.handleChange } />
        </form>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </>
    );
  }
}

export default AddMovie;
