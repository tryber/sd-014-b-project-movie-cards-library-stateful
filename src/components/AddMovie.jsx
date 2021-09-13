// implement AddMovie component here
import React, { Component } from 'react';
import AddTitle from './AddMovieComponents/AddTitle';
import AddSubTitle from './AddMovieComponents/AddSubtitle';
import AddImage from './AddMovieComponents/AddImage';
import AddStoryLine from './AddMovieComponents/AddStoryLine';
import AddRating from './AddMovieComponents/AddRating';
import AddGenre from './AddMovieComponents/AddGenre';
import SaveMovieButton from './AddMovieComponents/SaveMovieButton';

class AddMovie extends Component {
  constructor() { // constructor serve para inicializar estados
    super();
    this.state = { // define o estado inicial das propriedades
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

    handleAllChanges = (event) => { // seleciona os eventos de input
      const { name, value } = event.target;
      this.setState({ // update the state key corresponding to the given input name:
        [name]: value, // setState() automatically merges a partial state into the current state
      });
    } // handleChange vai definir o evento alvo e o que fazer com aquele resultado recebido

    render() {
      const { onClick } = this.props;
      const { title, subtitle, imagePath, storyline, rating, genre } = this.state; // renderiza os estados inicias
      return ( // todos componentes tem a prop handleChange que receberá a func handleAllChanges
        <form data-testid="add-movie-form">
          <AddTitle handleChange={ this.handleAllChanges } value={ title } />
          <AddSubTitle handleChange={ this.handleAllChanges } value={ subtitle } />
          <AddImage handleChange={ this.handleAllChanges } value={ imagePath } />
          <AddStoryLine handleChange={ this.handleAllChanges } value={ storyline } />
          <AddRating handleChange={ this.handleAllChanges } value={ rating } />
          <AddGenre handleChange={ this.handleAllChanges } value={ genre } />
          <SaveMovieButton onClick={ onClick } />

        </form>
      );
    }
} // test

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
