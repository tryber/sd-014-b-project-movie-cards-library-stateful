import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieForm from './addMovieComponents/AddMovieForm';

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

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitState = this.submitState.bind(this);
  }

  handleKeyUp({ target: { name, value }, keyCode }) {
    const keyEnter = 13;
    if (keyCode === keyEnter) {
      this.setState({
        [name]: value,
      });
    }
  }

  handleChange({ target, target: { type, name, value } }) {
    if (type === 'number') {
      const { max, min } = target;
      if (value > +(max)) value = max;
      if (value < +(min)) value = min;
      value = +(value);
    }
    this.setState({
      [name]: value,
    });
  }

  submitState(callbk) {
    callbk(this.state);

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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <AddMovieForm
          titleState={ title }
          subtitleState={ subtitle }
          imgPathState={ imagePath }
          sinopseState={ storyline }
          ratingState={ +(rating) }
          genreState={ genre }
          onChange={ this.handleChange }
          onClick={ () => this.submitState(onClick) }
        />
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
