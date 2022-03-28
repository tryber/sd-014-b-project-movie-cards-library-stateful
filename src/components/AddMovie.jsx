import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import StoryLine from './StoryLine';
import InputNumber from './InputNumber';
import InputGenre from './InputGenre';
import ButtonAddMovie from './ButtonAddMovie';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <section className="addMovie">
          <InputTitle value={ title } onChange={ this.handleChange } />
          <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
          <InputImage value={ imagePath } onChange={ this.handleChange } />
          <StoryLine value={ storyline } onChange={ this.handleChange } />
          <InputNumber value={ Number(rating) } onChange={ this.handleChange } />
          <InputGenre value={ genre } onChange={ this.handleChange } />
        </section>
        <section>
          <ButtonAddMovie onChange={ () => this.handleClick(onClick) } />
        </section>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
