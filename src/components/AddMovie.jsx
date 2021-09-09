import PropTypes from 'prop-types';
import React from 'react';
import AddRating from './AddMoviesComp/AddRating';
import Genre from './AddMoviesComp/Genre';
import ImagePath from './AddMoviesComp/ImagePath';
import Storyline from './AddMoviesComp/Storyline';
import SubTitle from './AddMoviesComp/SubTitle';
import Title from './AddMoviesComp/Title';

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

  inputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  resetValues = () => {
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
        <Title title={ title } inputChange={ this.inputChange } />
        <SubTitle subtitle={ subtitle } inputChange={ this.inputChange } />
        <ImagePath imagePath={ imagePath } inputChange={ this.inputChange } />
        <Storyline storyline={ storyline } inputChange={ this.inputChange } />
        <AddRating rating={ rating } inputChange={ this.inputChange } />
        <Genre genre={ genre } inputChange={ this.inputChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.resetValues }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
