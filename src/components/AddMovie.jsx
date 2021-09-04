// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './Inputs/InputTitle';
import InputSubTitle from './Inputs/InputSubTitle';
import InputStory from './Inputs/InputStory';
import InputImage from './Inputs/InputImage';
import InputRating from './Inputs/InputRating';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

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
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

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
      <form data-testid="add-movie-form">
        <section>
          <InputTitle value={ title } onChange={ this.handleChange } />
          <InputSubTitle value={ subtitle } onChange={ this.handleChange } />
          <InputImage value={ imagePath } onChange={ this.handleChange } />
          <InputStory value={ storyline } onChange={ this.handleChange } />
          <InputRating value={ rating } onChange={ this.handleChange } />
          <label htmlFor="genreNewMovie" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              id="genreNewMovie"
              data-testid="genre-input"
              value={ genre }
              onChange={ this.handleChange }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <section>
            <button
              data-testid="send-button"
              type="button"
              onClick={ this.handleClick }
            >
              Adicionar filme
            </button>
          </section>
        </section>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
