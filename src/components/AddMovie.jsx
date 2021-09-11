import React from 'react';
import PropTypes from 'prop-types';
import GenreMovie from './GenreMovie';
import ImageMovie from './ImageMovie';
import RatingMovie from './RatingMovie';
import SinopseMovie from './SinopseMovie';
import TitleMovie from './TitleMovie';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(callback, event) {
    event.preventDefault();
    callback(this.state);
    this.setState(initialState);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleMovie title={ title } handleChange={ this.handleChange } />
        <ImageMovie handleChange={ this.handleChange } value={ imagePath } />
        <SinopseMovie handleChange={ this.handleChange } value={ storyline } />
        <RatingMovie handleChange={ this.handleChange } value={ rating } />
        <GenreMovie handleChange={ this.handleChange } value={ genre } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ (event) => this.handleClick(onClick, event) }
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
