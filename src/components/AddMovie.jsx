// implement AddMovie component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BtnAddMovie from './BtnAddMovie';
import Genre from './Genre';
import Img from './Img';
import Rate from './Rate';
import Storyline from './Storyline';
import Subtitle from './Subtitle';
import Title from './Title';

class AddMovie extends Component {
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
    this.setState({ [target.name]: target.value });
  }

  handleClick = () => {
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
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title value={ title } onChange={ this.handleChange } />
          <Subtitle value={ subtitle } onChange={ this.handleChange } />
          <Img value={ imagePath } onChange={ this.handleChange } />
          <Storyline value={ storyline } onChange={ this.handleChange } />
          <Rate value={ rating } onChange={ this.handleChange } />
          <Genre value={ genre } onChange={ this.handleChange } />
          <BtnAddMovie onClick={ this.handleClick } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
