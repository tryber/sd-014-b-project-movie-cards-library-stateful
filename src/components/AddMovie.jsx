import React from 'react';
import InputAddMovie from './InputAddMovie';
import InputAddRating from './InputAddRating';
import TextareaAddMovie from './TextareaAddMovie';
import SelectAddGenre from './SelectAddGenre';
import BtnSubmit from './BtnSubmit';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
  submitted: false,
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  resetForm = () => { this.setState(INITIAL_STATE); };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetForm();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" className="form-container">
          <InputAddMovie
            description="Título"
            name="title"
            value={ title }
            handleChange={ this.handleChange }
          />
          <InputAddMovie
            description="Subtítulo"
            name="subtitle"
            value={ subtitle }
            handleChange={ this.handleChange }
          />
          <InputAddMovie
            description="Imagem"
            name="imagePath"
            value={ imagePath }
            handleChange={ this.handleChange }
          />
          <TextareaAddMovie
            description="Sinopse"
            name="storyline"
            value={ storyline }
            handleChange={ this.handleChange }
          />
          <InputAddRating
            description="Avaliação"
            name="rating"
            value={ rating }
            handleChange={ this.handleChange }
          />
          <SelectAddGenre
            description="Gênero"
            name="genre"
            value={ genre }
            handleChange={ this.handleChange }
          />
          <BtnSubmit handleSubmit={ this.handleSubmit } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
