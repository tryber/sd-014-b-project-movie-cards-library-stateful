import React from 'react';
import PropTypes from 'prop-types';
import AddMovieButton from './AddMovieComponents/Button';
import AddMovieGenre from './AddMovieComponents/Genre';
import AddMovieImage from './AddMovieComponents/Image';
import AddMovieRating from './AddMovieComponents/Rating';
import AddMovieStoryline from './AddMovieComponents/Storyline';
import AddMovieSubtitle from './AddMovieComponents/Subtitle';
import AddMovieTitle from './AddMovieComponents/Title';

class AddMovie extends React.Component { // constructor serve para inicializar estados
  constructor() {
    super();

    this.state = { // define o estado inicial das propriedades
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => { // seleciona os eventos de input
    const { name, value } = event.target;
    if (name === 'rating') {
      this.setState({ // // update the state key corresponding to the given input name:
        rating: Number(value), // setState() automatically merges a partial state into the current state
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  } // handleChange vai definir o evento alvo e o que fazer com aquele resultado recebido

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state; // renderiza os estados inicias
    return ( // todos componentes tem a prop handleChange que receberá a func handleAllChanges
      <form data-testid="add-movie-form">
        <AddMovieTitle handleChange={ this.handleChange } value={ title } />
        <AddMovieSubtitle handleChange={ this.handleChange } value={ subtitle } />
        <AddMovieImage handleChange={ this.handleChange } value={ imagePath } />
        <AddMovieStoryline handleChange={ this.handleChange } value={ storyline } />
        <AddMovieRating handleChange={ this.handleChange } value={ rating } />
        <AddMovieGenre handleChange={ this.handleChange } value={ genre } />
        <AddMovieButton onClick={ (event) => onClick(event, this.state) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

// Typically, in React constructors are only used for two purposes:
// Initializing local state by assigning an object to this.state.
// Binding event handler methods to an instance
// You should not call setState() in the constructor(). Instead,
// if your component needs to use local state, assign the initial state to this.state directly in the constructor:
// handleChange:
// When you need to handle multiple controlled input elements, you can add a name attribute to each element and let
// the handler function choose what to do based on the value of event.target.name.
