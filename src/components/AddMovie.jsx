import React from 'react';
import PropTypes from 'prop-types';
import GenreMovie from './GenreMovie';
import ImageMovie from './ImageMovie';
import RatingMovie from './RatingMovie';
import SinopseMovie from './SinopseMovie';

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
        <div className="mb-3">
          <label
            className="form-label"
            data-testid="title-input-label"
            htmlFor="title-input"
          >
            Título
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </div>
        <div className="mb-3">
          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.handleChange }
            />
          </label>
        </div>
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
