// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputMovie from './InputMovie';
import InputGenre from './InputGenre';

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

    handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
    }

      handleClick = (event) => {
        event.preventDefault();
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
        const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
        return (
          <section>
            <form data-testid="add-movie-form">
              <InputMovie
                title={ title }
                subtitle={ subtitle }
                storyline={ storyline }
                imagePath={ imagePath }
                onChange={ this.handleChange }
              />
              <InputGenre
                rating={ rating }
                genre={ genre }
                onChange={ this.handleChange }
              />
              <button
                type="submit"
                data-testid="send-button"
                onClick={ this.handleClick }
              >
                Adicionar filme
              </button>
            </form>
          </section>
        );
      }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
